const redux = require('redux')
const createStore = redux.createStore


const initialState = {
    movieList : [],
    user: 'RAM'
}

//Reducer

const rootReducer = (state = initialState, action) =>{
    if(action.type === 'Add Movie' ){
        return{
            ...state,
            movieList: action.list
        }
    }
    else if(action.type === 'Change_User'){
        return{
            ...state,
            user: action.name
        } 
    }
        

    
}

// create Store

const store = createStore(rootReducer)

console.log(store.getState())

//subscription

store.subscribe(()=>{
    console.log(store.getState())
})

//Dispatch Action

store.dispatch({
    type: 'Add Movie',
    list:{
        name: 'DDlJ',
        year: '1998'
    }
})

store.dispatch({
    type: 'Change_User',
    name: 'Shyam'
})




