import React  from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../Const/const';
import UserContext from '../UserAuthContext/UserContext';
import {StyledUl,StyledLi,StyledContainer} from '../../StyledComponents/index';
import img from '../App/images/body-bg.jpg' ;




const NavMenu = ({ loggedUser }) =>

    <UserContext.Consumer>
        {
        loggedUser => loggedUser
            ? <NavMenuIsLogged />
            : <NavMenuIsNotLogged />
        }
    </UserContext.Consumer>

const NavMenuIsLogged = () =>

<StyledContainer style = {{backgroundImage:`url(${img})`,minHeight:'20rem'}}>

    <StyledUl className = 'Nav--Menu'>
    
        <StyledLi><Link className = 'Nav--menu__link' to={routes.HOME_PAGE}>HOME</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.ACCOUNT_PAGE}>ACCOUNT</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.MARS_PAGE}>MARS</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.SPACEX_PAGE}>SpaceX Launches</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.NASA_IMAGE_LIBRARY}>Nasa Image Library</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.APOD_PAGE}>APOD</Link></StyledLi>

    </StyledUl>

</StyledContainer>


const NavMenuIsNotLogged = () =>

<StyledContainer style = {{backgroundImage:`url(${img})`,minHeight:'20rem'}}>

    <StyledUl className = 'Nav--Menu'>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.LANDING_PAGE}>LANDING</Link></StyledLi>
        <StyledLi><Link className = 'Nav--menu__link' to={routes.SIGN_IN_PAGE}>SIGN IN</Link></StyledLi>
    </StyledUl>

</StyledContainer>

export default NavMenu;