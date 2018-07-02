import React, { Component } from 'react';
import Button from '../../Buttons';
import { doSignOutUser } from '../../../Firebase/auth';
import UserContext from '../../UserAuthContext/UserContext';
import { PassworResetLink } from '../PasswordResetPage';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import { authCondition } from '../../UserAuthContext/authCondition';

class AccountPage extends Component {


  constructor(props){
    super(props);

    this.state = {
      users:null
    }
  }


  render() {
    return (
      <div>

        <UserContext.Consumer>

          {loggedUser => loggedUser
            ? <div style = {{transform:'translateY(6rem)'}}>
              <PassworResetLink />
              <Button className='Log--out__button' type='button' text='Log Out' onClick={doSignOutUser} />

            </div>

            : null
          }
        </UserContext.Consumer>

      </div>
    );
  }
}
export default AuthorisationChecker(authCondition)(AccountPage);

