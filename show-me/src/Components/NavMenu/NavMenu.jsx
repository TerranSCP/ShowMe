import  React  from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../Const/const';

const NavMenu = () =>
    <div className='Nav--Menu'>
        <NavMenuIsLogged/>
        <NavMenuIsNotLogged/>
    </div>

const NavMenuIsLogged = () =>
    
      <ul> 
        <li><Link to={routes.HOME_PAGE}>HOME</Link></li>
        <li><Link to={routes.ACCOUNT_PAGE}>ACCOUNT</Link></li>
        <li><Link to={routes.PASSWORD_RESET_PAGE}>PASSWORD RESET</Link></li>

        <li><Link to={routes.MARS_PAGE}>MARS</Link></li>
        <li><Link to={routes.EPIC_PAGE}>EPIC</Link></li>
        <li><Link to={routes.EARTH_PAGE}>EARTH</Link></li>
        <li><Link to={routes.APOD_PAGE}>APOD</Link></li>
    </ul>



const NavMenuIsNotLogged = () =>
    <ul>
        <li><Link to={routes.LANDING_PAGE}>LANDING</Link></li>
        <li><Link to={routes.SIGN_IN_PAGE}>SIGN IN</Link></li>
    </ul>

export default NavMenu;