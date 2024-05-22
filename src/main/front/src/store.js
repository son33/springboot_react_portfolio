export const modalDisplayOn = () => ({ type: 'modalOpen' });
export const modalDisplayOff = () => ({ type: 'modalOff' });
export const loginSuccess = () => ({ type: 'loginSuccess' });
export const logoutSuccess = () => ({ type: 'logoutSuccess' });

const initState = {
    str: "none",
    loginResult: 0,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'modalOpen':
            return { str: "flex" };
        case 'modalOff':
            return { str: "none" };
        case 'loginSuccess':
            return { loginResult: 1 };
        case 'logoutSuccess':
            return { loginResult: 0 };
        default:
            return state;
    }
}

export default reducer;