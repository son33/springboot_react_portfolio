export const modalDisplayOn = () => ({type:'modalOpen'});
export const modalDisplayOff = () => ({type:'modalOff'});

const initState = {
    str:"none"
}

export const reducer = (state = initState, action) => {
    switch(action.type){
        case 'modalOpen':
            return {str: "flex"};
        case 'modalOff' :
            return {str: "none"};
        default:
            return state;
    }
}

export default reducer;