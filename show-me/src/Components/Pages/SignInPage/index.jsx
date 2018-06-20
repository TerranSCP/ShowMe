import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../../Firebase';
import { SignUpLink } from '../SignUpPage';
import { PasswordForgetLink } from '../PasswordForgetPage'
import * as routes from '../../Const/const';
import history from '../../History';
import Button from '../../Buttons/index';
import { StyledInput, StyledForm, StyledContainer ,StyledText ,RotatedImg} from '../../../StyledComponents/index';
import image from '../../App/images/satelite.png'



const SignInPage = () =>
    <div style = {{position:'relative'}}>
        <SignInForm />
        <SignUpLink />
        <PasswordForgetLink />
        <RotatedImg  src = {image}></RotatedImg>
    </div>


const STATES = {
    email: '',
    password: '',
    error: null
}


const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}

class SignInForm extends Component {

    constructor(props) {

        super(props);

        this.state = { ...STATES };


    }

    onSubmit = (event) => {

        const {
            email,
            password
        } = this.state;

        event.preventDefault();


        auth.doSignInUser(email, password)
            .then(data => {

                this.setState(() => ({ ...STATES }))
                history.push(routes.HOME_PAGE);

            })
            .catch(error => error)
    }


    render() {

        const {
            email,
            password,
            error
        } = this.state;


        const isNotValid = !email.match(/.{1,15}@.{1,10}/i) || password === '';

        return (

            <StyledContainer>

                <StyledForm onSubmit={this.onSubmit}>

                    <StyledInput type='email' value={email} onChange={event => this.setState(VIA_PROPS('email', event.target.value))} placeholder='Your email' />
                    <StyledInput type='password' value={password} onChange={event => this.setState(VIA_PROPS('password', event.target.value))} placeholder='Your password' />
                    <Button text='Sign In' value='Sign In' type='submit' disabled={isNotValid}></Button>


                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </StyledForm>



            </StyledContainer>
        );
    }



}


export const SignInLink = () =>
    <div>
       <StyledText> Already have account?</StyledText> 
        <Link to={routes.SIGN_IN_PAGE}>Sign In!</Link>
    </div>

export default withRouter(SignInPage);