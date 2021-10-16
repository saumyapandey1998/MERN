import {BrowserRouter, Route, Switch} from 'react-router-dom'
import about from './components/about'
import courses from './components/courses';
import Footer from './components/Footer';
import Header from './components/Header';
import home from './components/home';
import MockTest from './components/mock-tests/MockTest';
import MockTestDetails from './components/mock-tests/MockTestDetails';
import pagenotfound from './components/pagenotfound';
import team from './components/team';

function App(){
  return(
  <BrowserRouter>
      <Header />
      <Switch> 
        <Route path ="/about/team" component={team} />
        <Route path ="/about" component={about} />
        
        
        <Route path ="/courses" component={courses} />
        
        <Route path ="/" component={home} exact />

        <Route path ="/mock-tests/:topic" component={MockTestDetails}/>
        <Route path ="/mock-tests" component={MockTest} />

        <Route component={pagenotfound}/>  
        
      </Switch>
      <Footer />

   </BrowserRouter>
  );
}

export default App;