import React , {Component} from 'react';
import './App.css';
import history from '../History/History'
import * as routes from '../Const/const'
import { Router, Route} from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

import HomePage from '../Pages/HomePage/HomePage';
import AccountPage from '../Pages/AccountPage/AccountPage';
import ApodPage from '../Pages/ApodPage/ApodPage';
import EarthPage from '../Pages/EarthPage/EarthPage';
import EpicPage from '../Pages/EpicPage/EpicPage';
import LandingPage from '../Pages/LandingPage/LandingPage';
import MarsPage from '../Pages/MarsPage/MarsPage';
import PasswordForgetPage from '../Pages/PasswordForgetPage/PasswordForgetPage';
import PasswordResetPage from '../Pages/PasswordResetPage/PasswordResetPage';
import SignInPage from '../Pages/SignInPage/SignInPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';



class App extends Component {
  render() {
    return (
     
      <Router history = {history}>

         <div className="App">

        <h1>Welcome to "ShowMe"</h1>

        <NavMenu/>

        <Route exact path = {routes.HOME_PAGE} component = {()=><HomePage/>}></Route>
        <Route exact path = {routes.LANDING_PAGE} component = {()=><LandingPage/>} ></Route>
        <Route exact path = {routes.ACCOUNT_PAGE} component = {()=><AccountPage/>} ></Route>

        <Route exact path = {routes.SIGN_IN_PAGE} component = {()=><SignInPage/>}></Route>
        <Route exact path = {routes.SIGN_UP_PAGE} component = {()=><SignUpPage/>}></Route>

        <Route exact path = {routes.PASSWORD_FORGET_PAGE} component = {()=><PasswordForgetPage/>}></Route>
        <Route exact path = {routes.PASSWORD_RESET_PAGE} component = {()=><PasswordResetPage/>}></Route>

        <Route exact path = {routes.EARTH_PAGE} component = {()=><EarthPage/>}></Route>
        <Route exact path = {routes.MARS_PAGE} component = {()=><MarsPage/>}></Route>
        <Route exact path = {routes.EPIC_PAGE} component = {()=><EpicPage/>}></Route>
        <Route exact path = {routes.APOD_PAGE} component = {()=><ApodPage/>}></Route>
      

        </div>

      </Router>

    
    );
  }
}

export default App;
