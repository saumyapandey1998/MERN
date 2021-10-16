import logo from './logo.svg';
import './App.css';
import navbar from './components/navbar'
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <>
      <h1 className ="text-center">
      <div class ="main-heading"> The </div>
        <strong>Blog</strong>
      </h1>

      <navbar/>
      <hr/>

      {/* <Route exact path="/" component={Home}><Home/></Route> */}
      {/* <Route exact path="/bollywod" component={bollywood}><Home/></Route>
      <Route exact path="/" component={Home}><Home/></Route>
      <Route exact path="/" component={Home}><Home/></Route>
      <Route exact path="/" component={Home}><Home/></Route>
      <Route exact path="/" component={Home}><Home/></Route> */}

      </>
    )
  }
}

export default App;
