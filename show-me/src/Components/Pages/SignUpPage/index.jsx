import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../../Firebase';
import { SignInLink } from '../SignInPage'
import * as routes from '../../Const/const';
import history from '../../History';
import { database } from '../../../Firebase';
import { StyledInput, StyledForm, StyledContainer, StyledText } from '../../../StyledComponents/index';
import Button from '../../Buttons/index'



const SignUpPage = () =>
    <div>
        <StyledText> Sign Up </StyledText>
        <SignUpForm />
            <SignInLink />
       
    </div>



const STATES = {

    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null
}


const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}

class SignUpForm extends Component {

    constructor(props) {

        super(props);

        this.state = { ...STATES };


    }

    onSubmit = (event) => {

        const {
            email,
            password,
            username,

        } = this.state;

        event.preventDefault();

        auth.doCreateUser(email, password)
            .then(
                data => {

                    history.push(routes.HOME_PAGE);

                    database.createDbUser(data.user.uid, username, email)

                        .then(() => {
                            this.setState(() => ({ ...STATES }));

                        })
                        .catch(error => this.setState(VIA_PROPS('error', error)))


                })

            .catch(error => this.setState(VIA_PROPS('error', error)))
    }


    render() {

        const {
            email,
            password,
            confirmPassword,
            username,
            error
        } = this.state;


        const isNotValid = !email.match(/.{1,15}@.{1,10}/i) || (password !== confirmPassword) || password === '' || confirmPassword === '' || username === '';

        return (

            <StyledContainer>

                <StyledForm onSubmit={this.onSubmit}>

                    <StyledInput type='text' value={username} onChange={event => this.setState(VIA_PROPS('username', event.target.value))} placeholder='User Name' />
                    <StyledInput type='email' value={email} onChange={event => this.setState(VIA_PROPS('email', event.target.value))} placeholder='Your email' />
                    <StyledInput type='password' value={password} onChange={event => this.setState(VIA_PROPS('password', event.target.value))} placeholder='Your password' />
                    <StyledInput type='password' value={confirmPassword} onChange={event => this.setState(VIA_PROPS('confirmPassword', event.target.value))} placeholder='Confirm password' />
                    <Button text='Sign Up' value='Sign In' type='submit' disabled={isNotValid}></Button>


                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </StyledForm>



            </StyledContainer>
        );
    }

}



export const SignUpLink = () =>
    <div>
        <StyledText> Dont have account? </StyledText>
        <Link to={routes.SIGN_UP_PAGE}>Sign UP!</Link>
    </div>

export default withRouter(SignUpPage);