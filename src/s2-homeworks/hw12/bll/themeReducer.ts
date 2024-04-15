export type ThemeStateType = {
    themeId: number
}


const initState: ThemeStateType = {
    themeId: 1,
}


type ActionsType = {
    type: 'SET_THEME_ID'
    id: number
}


export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionsType => ({type: 'SET_THEME_ID', id}) // fix any
