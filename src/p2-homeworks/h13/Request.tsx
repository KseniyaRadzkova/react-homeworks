import React, {useEffect} from "react";
import {authApi} from "./RequestsAPI";

export const Request = () => {
    const [text, setText] = React.useState<string>('')
    const [fakeError, setError] = React.useState<string>('')
    const [showError, setShowError] = React.useState<boolean>(false)

    useEffect(() => {
        authApi(showError)
            .then(res => setText(res.data.errorText))
            .catch(error => {
                setError(error.response ? error.response.data.errorText : error.message)
            })
    })

    const onChangeErrorClick = () => setShowError(!showError)

    return <div>
        <input type="checkbox" checked={showError} onChange={onChangeErrorClick}/>
        <button onClick={onChangeErrorClick}>Press me</button>
        <h4>
            {showError
                ? text
                : fakeError
            }
        </h4>
    </div>
}

