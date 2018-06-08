import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../Const/const';
import UserContext from '../UserAuthContext/UserContext'


const NavMenu = ({ loggedUser }) =>
    <UserContext.Consumer>
        {
        loggedUser => loggedUser
            ? <NavMenuIsLogged />
            : <NavMenuIsNotLogged />
        }
    </UserContext.Consumer>

const NavMenuIsLogged = () =>

    <ul className = 'Nav--Menu'>
        <li><Link to={routes.HOME_PAGE}>HOME</Link></li>
        <li><Link to={routes.ACCOUNT_PAGE}>ACCOUNT</Link></li>
        <li><Link to={routes.MARS_PAGE}>MARS</Link></li>
        <li><Link to={routes.EPIC_PAGE}>EPIC</Link></li>
        <li><Link to={routes.NASA_IMAGE_LIBRARY}>Nasa Image Library</Link></li>
        <li><Link to={routes.APOD_PAGE}>APOD</Link></li>

    </ul>



const NavMenuIsNotLogged = () =>
    <ul className = 'Nav--Menu'>
        <li><Link to={routes.LANDING_PAGE}>LANDING</Link></li>
        <li><Link to={routes.SIGN_IN_PAGE}>SIGN IN</Link></li>
    </ul>

export default NavMenu;