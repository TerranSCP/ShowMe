import React from 'react';
import {observeOnAuthStateChanged} from '../../Firebase/auth'
import UserContext from './UserContext'




const AuthentificationChecker = (Component) => {

    class AuthentificationChecker extends React.Component{

        constructor(props){

            super(props);

           this.state = {
               loggedUser:null
           }
        }

        componentDidMount(){
            
           observeOnAuthStateChanged(loggedUser => loggedUser ? 
                this.setState({loggedUser})
                :this.setState( {loggedUser : null}))
        }


        render(){

            const {loggedUser} = this.state;
           

            return (

            <UserContext.Provider value = {loggedUser}>
                <Component/>
            </UserContext.Provider>

            );
        }
        
    }

    return AuthentificationChecker

}

export default AuthentificationChecker;