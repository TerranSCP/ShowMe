import React , {Component} from 'react';
import { withRouter , Link } from 'react-router-dom';
import { auth } from '../../../Firebase';
import {SignInLink} from '../SignInPage/SignInPage'
import * as routes from '../../Const/const';
import history from '../../History/History'



const SignUpPage = () =>
<div> Sign Up 
 <SignUpForm/>
 <SignInLink/>
</div>



const STATES = {

    username:'',
    email: '',
    password: '',
    confirmPassword:'',
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
            confirmPassword,
            username,

        } = this.state;

        event.preventDefault();

        auth.doCreateUser(email, password)
            .then(data => {
                 this.setState({ ...STATES })
                 history.push(routes.HOME_PAGE);
                 })
            .catch(error => error)
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
            
            <div>

                <form onSubmit={this.onSubmit}>

                    <input type='text' value={username} onChange={event => this.setState(VIA_PROPS('username', event.target.value))} placeholder='User Name' />
                    <input type='email' value={email} onChange={event => this.setState(VIA_PROPS('email', event.target.value))} placeholder='Your email' />
                    <input type='password' value={password} onChange={event => this.setState(VIA_PROPS('password', event.target.value))} placeholder='Your password' />
                    <input type='password' value={confirmPassword} onChange={event => this.setState(VIA_PROPS('confirmPassword', event.target.value))} placeholder='Confirm password' />
                    <button value='Sign In' type='submit' disabled={isNotValid}>Sign In</button>


                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </form>



            </div>
        );
    }

}



export const SignUpLink = () =>
<div>
    Dont have account? <br/>
    <Link to={routes.SIGN_UP_PAGE}>Sign UP!</Link>
</div>

export default withRouter(SignUpPage);