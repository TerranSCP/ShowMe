import React, { Component } from 'react';
import './App.css';
import AuthentificationChecker from '../UserAuthContext/AuthentificationChecker'
import Routing from '../Routing'




class App extends Component {
  render() {
    return (



      <div className="App">
        <h1>Welcome to "ShowMe"</h1>
        <Routing />

      </div>




    );
  }
}

export default AuthentificationChecker(App);
