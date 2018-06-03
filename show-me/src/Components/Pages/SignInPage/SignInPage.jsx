import React, { Component } from 'react';
import { withRouter , Link } from 'react-router-dom';
import { auth } from '../../../Firebase';
import { firebase } from '../../../Firebase';
import {SignUpLink} from '../SignUpPage/SignUpPage';
import * as routes from '../../Const/const';
import history from '../../History/History'



const SignInPage = () =>
    <div> Sign In Page
    <SignInForm />
    <SignUpLink/>
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

       // const {history : {push} } = this.props;

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
            <div>

                <form onSubmit={this.onSubmit}>
                    <input type='email' value={email} onChange={event => this.setState(VIA_PROPS('email', event.target.value))} placeholder='Your email' />
                    <input type='password' value={password} onChange={event => this.setState(VIA_PROPS('password', event.target.value))} placeholder='Your password' />
                    <button value='Sign In' type='submit' disabled={isNotValid}>Sign In</button>


                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </form>



            </div>
        );
    }



}


export const SignInLink = () =>
<div>
    Already have account? <br/>
    <Link to={routes.SIGN_IN_PAGE}>Sign In!</Link>
</div>

export default withRouter(SignInPage);