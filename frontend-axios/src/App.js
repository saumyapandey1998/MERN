import { Component } from "react";
import axios from 'axios';
class App extends Component{

  state={
    postsList: []
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    
    .then((response)=>{
      console.log(response.data)

      this.setState({
        postsList: response.data
      })
    })

    .catch((error)=>
    console.log(error))


    console.log("Fetching Data")
  }
  render(){
      
    return(
      <>
        <h1>App</h1>
        {this.state.postsList.map(
          (item)=>(
            <div key={item.id}>
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </div>
          ))}
      </>
    );
  }
}

export default App;
