




const initialState = {
    counter: 0,
    
}

const reducer = (state = initialState, action, val ) => {
    if(action.type === 'ADD_CHART') {
        return {...state, counter: state.counter + 1}
    };
   
    return state
}

export default reducer
