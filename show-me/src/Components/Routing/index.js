import React, { Component } from 'react';
import * as routes from '../Const/const'
import { Router, Route } from 'react-router-dom';
import history from '../History'

import NavMenu from '../NavMenu';
import HomePage from '../Pages/HomePage';
import AccountPage from '../Pages/AccountPage';
import ApodPage from '../Pages/ApodPage';
import NasaImageLibrary from '../Pages/ImageLibrary/NasaImageLibrary';
import SpaceXPage from '../Pages/SPACEX/SpaceXPage';
import LandingPage from '../Pages/LandingPage';
import MarsPage from '../Pages/MarsPage/MarsPage';
import PasswordForgetPage from '../Pages/PasswordForgetPage';
import PasswordResetPage from '../Pages/PasswordResetPage';
import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';




class Routing extends Component {

 

    render() {

       

        return(

     

        <Router history={history}>

            <div>

                <NavMenu />


                <Route exact path = {routes.HOME_PAGE}  component ={ () => <HomePage /> }></Route>
                <Route exact path={routes.LANDING_PAGE} component={() => <LandingPage />} ></Route>
                <Route exact path={routes.ACCOUNT_PAGE} component={() => <AccountPage />} ></Route>

                <Route exact path={routes.SIGN_IN_PAGE} component={() => <SignInPage />}></Route>
                <Route exact path={routes.SIGN_UP_PAGE} component={() => <SignUpPage />}></Route>

                <Route exact path={routes.PASSWORD_FORGET_PAGE} component={() => <PasswordForgetPage />}></Route>
                <Route exact path={routes.PASSWORD_RESET_PAGE} component={() => <PasswordResetPage />}></Route>

                <Route exact path={routes.NASA_IMAGE_LIBRARY} component={() => <NasaImageLibrary />}></Route>
                <Route exact path={routes.MARS_PAGE} component={() => <MarsPage />}></Route>
                <Route exact path={routes.SPACEX_PAGE} component={() => <SpaceXPage />}></Route>
                <Route exact path={routes.APOD_PAGE} component={() => <ApodPage />}></Route>


            </div>

        </Router>

       

        );
    }
}

export default Routing;