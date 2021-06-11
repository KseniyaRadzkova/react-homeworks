type initStateType = {
    color: string,
    themes: string []
};

const initState: initStateType = {
    color: 'some',
    themes: ['dark', 'red', 'some', 'dark-text', 'red-text', 'some-text']
}

export const themeReducer = (state = initState, action: any): initStateType => { // fix any
    switch (action.type) {
        case "CHANGING-COLOR": {
            return {
                ...state,
                color: action.color
            };
        }
        default: return state;
    }
};

type changeThemeCType = {
    type: 'CHANGING-COLOR'
    color: string
}

export const changeThemeC = (color: string): changeThemeCType => ({type: "CHANGING-COLOR", color}); // fix any