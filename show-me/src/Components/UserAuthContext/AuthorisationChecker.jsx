import React from 'react';
import {withRouter} from 'react-router-dom';
import {observeOnAuthStateChanged} from '../../Firebase/auth'
import UserContext from './UserContext'
import * as routes from '../Const/const';
import history from '../History/History';



const AuthorisationChecker = (authCondition) => (Component) => {

    class AuthorisationChecker extends React.Component {

        componentDidMount(){
            observeOnAuthStateChanged(loggedUser =>{
                if(!authCondition(loggedUser)){
                    history.push(routes.SIGN_IN_PAGE);
                }
            })
        }

        render(){
            return(
                <UserContext.Consumer>
                    {loggedUser=>loggedUser ? <Component/> : null}
                </UserContext.Consumer>
            );
        }
    }


    return withRouter(AuthorisationChecker);


}


export default AuthorisationChecker;