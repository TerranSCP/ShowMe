import React, { Component } from 'react';
import * as routes from '../../Const/const';
import { Link } from 'react-router-dom';
import { doPasswordReset } from '../../../Firebase/auth';
import history from '../../History/History'


const PasswordForgetPage = () =>
    <div> Enter your email below
        <PasswordForgetForm/>
    </div>



const STATES = {
    email: '',
    error: null
}


const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}

class PasswordForgetForm extends Component {

    constructor(props) {

        super(props);

        this.state = { ...STATES };


    }

    onSubmit = (event) => {

        const {
            email
        } = this.state;

        event.preventDefault();


        doPasswordReset(email)
            .then(data => {

                this.setState(() => ({ ...STATES }))
                history.push(routes.LANDING_PAGE);

            })
            .catch(error => error)
    }


    render() {

        const {
            email,
            error
        } = this.state;


        const isNotValid = !email.match(/.{1,15}@.{1,10}/i);

        return (
            <div>

                <form onSubmit={this.onSubmit}>

                    <input type='email' value={email} onChange={event => this.setState(VIA_PROPS('email', event.target.value))} placeholder='Your email' />
                    <button type='submit' disabled ={isNotValid}>Send new password</button>

                    <div>

                        {error && <p>{error.message}</p>}

                    </div>

                </form>



            </div>
        );
    }



}




export const PasswordForgetLink = () =>
    <div>
        <Link to={routes.PASSWORD_FORGET_PAGE}>Forget password ?</Link>
    </div>

export default PasswordForgetPage;