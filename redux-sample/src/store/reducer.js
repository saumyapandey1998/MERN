
const initialState ={
    counter: 0,
    value: 2
}


const reducer = (state = initialState, action) => {
    if(action.type === 'increment_counter'){
        return{
            ...state,
            counter: state.counter +1
        }

    }

    if(action.type === 'increment_value'){
        return{
            ...state,
            counter: state.counter + action.count
        }
           
    }

    return state;
}

export default reducer;
