import React, { Component } from 'react';
import * as routes from '../../Const/const';
import { Link } from 'react-router-dom';
import { doPasswordUpdate } from '../../../Firebase/auth';
import history from '../../History/History';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';


const PasswordResetPage = () =>
<div> Enter new password below
    <PasswordResetForm/>
</div>


const STATES = {
    password: '',
    confirmPassword:'',
    error: null
}


const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}

class PasswordResetForm extends Component {

    constructor(props) {

        super(props);

        this.state = { ...STATES };


    }

    onSubmit = (event) => {

        const {
            password,
        } = this.state;

        event.preventDefault();


        doPasswordUpdate(password)
            .then(data => {

                this.setState(() => ({ ...STATES }))
                history.push(routes.HOME_PAGE);

            })
            .catch(error => error)
    }


    render() {

        const {
           password,
           confirmPassword,
            error
        } = this.state;


        const isNotValid = password === '' || confirmPassword === '' || confirmPassword !== password;

        return (
            <div>

                <form onSubmit={this.onSubmit}>

                    <input type='password' value={password} onChange={event => this.setState(VIA_PROPS('password', event.target.value))} placeholder='New password' />
                    <input type='password' value={confirmPassword} onChange={event => this.setState(VIA_PROPS('confirmPassword', event.target.value))} placeholder='Confirm password' />
                    <button type='submit' disabled ={isNotValid}>Change password</button>

                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </form>



            </div>
        );
    }



}



export const PassworResetLink = () =>

    <div>
        <Link to={routes.PASSWORD_RESET_PAGE}>Change password </Link>
    </div>


export default AuthorisationChecker(authCondition)(PasswordResetPage);