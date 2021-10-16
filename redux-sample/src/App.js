
/* USING REDUX WITH CLASS COMPONENT, UNCOMMENT TO RUN THE FILE*/
/* MAKE SURE TO NOT UNCOMMENT THE PART OF CODE THAT HAS BEEN EXCLUSIVELY COMMENTED LINE 46 HAS BEEN COMMENTED AS ITS FUNCTION HAS BEEN SHIFTED TO ACTION CREATORS, UNCOMMENTING THE SAME wOULD GENERATE ERRORS*/

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { counterAction, counterAction2 } from './store/actions/action'

// class App extends Component{

//     render(){
//         console.log(this.props)
//         return(
//             <>  
//                 <h1>React Redux</h1>
                
//                 {this.props.ctr}
//                 <hr></hr>
               

//                 <button onClick = {() =>this.props.dispatch(counterAction())}>Increment</button>
//                 <button onClick= {()=> this.props.dispatch(counterAction2())}>Increament by 5</button>
//             </>
//         );
//     }
// }

// const mapStateToProps = (state)=>{
//     return {
//         ctr: state.counter,
//         val: state.value    
//     }
// }




// const mapDispatchToProps = (dispatch) =>{
//     return{
//         incrementCounter:() => dispatch({type:  'increment_counter'})
//     } //implemented using action creators
// }

//export default connect (mapStateToProps)(App);

/*export default connect (mapStateToProps , mapDispatchToProps)(App);*/ //the connect function is returning a high order component that high order component will take App as a parameter and this app component will get access to the functionalities

/* USING REDUX WITH FUNCTIONAL COMPONENTS*/

import {useSelector, useDispatch} from 'react-redux'
import { counterAction, counterAction2 } from './store/actions/action'

const App =()=>{
    

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return (
        <>
            {counter} 
            <hr></hr>
            <button onClick={()=>dispatch(counterAction())}>Increment By 1 </button>
            <hr></hr>
            <button onClick={()=>dispatch(counterAction2())}>Increment by  5</button>
        </>
    );
};

export default App;