import React from 'react';
import { Component } from 'react';
import Courses from './courses';
import Heading1 from './heading1';
import courseJson from './../courses.json'
//import HeadingClass from './components/headinClass';

/*FUNCTIONAL COMPONENT*/

// import Banner from './components/banner';

// function handleClick(event){
//     console.log("button is clicked", event.target.id);
// }

// function handleChange(event){
//     console.log("Typing", event.target.value)
// }

// function handleFocus (){
//     console.log("Input in Focus")
// }


// function App(){
//     return(
//     <>
//      <HeadingClass />
//     <button onClick = {handleClick} id ='button 1 '>Click me</button>
//     <button onClick = {handleClick} id = 'button 2' >Primary Button</button>
//     <input onChange ={handleChange} onFocus = {handleFocus}></input>
//     </>
//     )
// }

/*CLASS COMPONENT*/

// class App extends Component{

//     handleClick(event){
//         console.log("button is clicked", event.target.id);
//     }
    
//     handleChange(event){
//         console.log("Typing", event.target.value)
//     }
    
//     handleFocus (){
//         console.log("Input in Focus")
//     }

//     render(){
//     return(
//     <>
//      <HeadingClass />
//     <button onClick = {this.handleClick} id ='button 1 '>Click me</button>
//     <button onClick = {this.handleClick} id = 'button 2' >Primary Button</button>
//     <input onChange ={this.handleChange} onFocus = {this.handleFocus}></input>
//     </>
//     )
//     }

// }



/*STATES IN CLASS COMPONENT*/


// class App extends Component{

//     state = {
//         counter: 1,
//         heading : "Welcome to React"
//     };

//     handleCLick = (event) => {
//         let localCounter = this.state.counter;
//         this.setState({
//             counter : localCounter+1,
//             heading : "Learning states in React"
//         })
//     }



//     render(){
//         return(
//             <>
//             <h1>{this.state.heading}</h1>
//             <button onClick ={this.handleCLick}>ADD</button>
//             <p> {this.state.counter} </p>
//             </>
//         )
//     }

// }

/*PROPS*/
class App extends Component{

    state = {
        heading: "Welcome to courses",
        courseList : courseJson        
    };

    render(){
        return(
            <>
            <Heading1  heading = {this.state.heading}/>
            <Courses courseList = {this.state.courseList}/>
            </>
        )
    }

}

export default App;