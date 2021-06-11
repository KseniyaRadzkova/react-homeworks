import axios from "axios";

type SuccessType = {
    success:boolean
}

type ResponseType = {
    errorText: string
    info: string
    yourBody: SuccessType
    success: boolean
    yourQuery: {}
}

export const authApi = (success:boolean) => {
    return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
}