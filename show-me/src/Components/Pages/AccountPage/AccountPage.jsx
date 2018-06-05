import React from 'react';
import Button from '../../Buttons/Button';
import { doSignOutUser } from '../../../Firebase/auth';
import UserContext from '../../UserAuthContext/UserContext';
import {PassworResetLink} from '../PasswordResetPage/PasswordResetPage';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';


const AccountPage = () =>

<div> 
  
  <UserContext.Consumer>
   
    { loggedUser => loggedUser 
     ? <div> 

        <PassworResetLink/>
        <Button className='Log--out__button' type='button' text='Log Out' onClick={doSignOutUser} />
        
      </div>

     : null
    }
  </UserContext.Consumer>  

</div>

export default AuthorisationChecker(authCondition)(AccountPage);

