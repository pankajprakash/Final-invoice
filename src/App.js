import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import ComapnyReg from './Auth/CompanyRegistration/CompanyReg'
import UserRegistration from './Auth/UserRegistration/UserRegistration'
import Login from './Auth/Login/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Result from './Components/Result'


function App() {
  return (
    <div className="App">

      {/* <UserReg /> */}
      
      

      
  

      <Router>
        <Switch>
        {/* <Login /> */}
          <Route exact path="/" component={UserRegistration}  />
          <Route exact path="/login" component={Login}  />
          <Route exact path="/form" component={Form}  />
          <Route exact path="/company" component={ComapnyReg}  />
          
          {/* <UserRegistration /> */}
      <ComapnyReg />
      <Form />

        </Switch>
      </Router>
     
    

   
    </div>
  );
}

export default App;
