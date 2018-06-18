import React, { Component } from 'react';

import AuthentificationChecker from '../UserAuthContext/AuthentificationChecker'
import Routing from '../Routing';
import {StyledHeader,StyledText} from '../../StyledComponents/index';
import  {injectGlobal} from 'styled-components'



injectGlobal`
    body{
        margin:0;
        padding: 0;
        background-color: lightgray;
        
    }
    .Nav--menu__link{
      text-decoration: none;
      color:rgb(1, 22, 19);
      font-size: 1.4rem;
    }
`


class App extends Component {

  render() {

    return (
      <div className="App">
        <StyledHeader>Welcome to ShowMe app.</StyledHeader>
        <StyledText>Know more about space programs and investigate amazing things!</StyledText>
        <Routing />
      </div>
    );
  }
}

export default AuthentificationChecker(App);
