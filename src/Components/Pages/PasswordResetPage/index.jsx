import React, { Component } from 'react';
import * as routes from '../../Const/const';
import { Link } from 'react-router-dom';
import { doPasswordUpdate } from '../../../Firebase/auth';
import history from '../../History';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import {StyledContainer,StyledForm,StyledInput,StyledText} from '../../../StyledComponents/index';
import Button from '../../Buttons/index';


const PasswordResetPage = () =>
<div>  <StyledText>Enter new password below</StyledText>
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

            <StyledContainer style = {{ background:'gray', minHeight:'15rem'}}>

                <StyledForm onSubmit={this.onSubmit}>

                    <StyledInput type='password' value={password} onChange={event => this.setState(VIA_PROPS('password', event.target.value))} placeholder='New password' />
                    <StyledInput type='password' value={confirmPassword} onChange={event => this.setState(VIA_PROPS('confirmPassword', event.target.value))} placeholder='Confirm password' />
                    <Button text = 'Change password' type='submit' disabled ={isNotValid}></Button>

                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </StyledForm>



            </StyledContainer>
        );
    }



}



export const PassworResetLink = () =>

    <div>
        <Link to={routes.PASSWORD_RESET_PAGE}>Change password </Link>
    </div>


export default AuthorisationChecker(authCondition)(PasswordResetPage);