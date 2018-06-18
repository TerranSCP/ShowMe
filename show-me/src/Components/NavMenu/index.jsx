import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../Const/const';
import UserContext from '../UserAuthContext/UserContext'
import {StyledUl,StyledLi,StyledLink} from '../../StyledComponents/index'


const NavMenu = ({ loggedUser }) =>

    <UserContext.Consumer>
        {
        loggedUser => loggedUser
            ? <NavMenuIsLogged />
            : <NavMenuIsNotLogged />
        }
    </UserContext.Consumer>

const NavMenuIsLogged = () =>

    <StyledUl className = 'Nav--Menu'>
    
        <StyledLi><Link className = 'Nav--menu__link' to={routes.HOME_PAGE}>HOME</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.ACCOUNT_PAGE}>ACCOUNT</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.MARS_PAGE}>MARS</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.SPACEX_PAGE}>SpaceX Launches</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.NASA_IMAGE_LIBRARY}>Nasa Image Library</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.APOD_PAGE}>APOD</Link></StyledLi>

    </StyledUl>



const NavMenuIsNotLogged = () =>
    <StyledUl className = 'Nav--Menu'>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.LANDING_PAGE}>LANDING</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.SIGN_IN_PAGE}>SIGN IN</Link></StyledLi>
    </StyledUl>

export default NavMenu;