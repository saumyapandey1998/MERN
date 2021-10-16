import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './store/reducer'


const store = createStore(reducer)



ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, 
    document.getElementById("root")
);