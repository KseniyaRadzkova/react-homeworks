const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionLoadingType): typeof initState=> { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

type ActionLoadingType = {
    type: "CHANGE_LOADING"
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): ActionLoadingType => ({type: "CHANGE_LOADING", isLoading})