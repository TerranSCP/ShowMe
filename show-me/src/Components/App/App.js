import React, { Component } from 'react';
import AuthentificationChecker from '../UserAuthContext/AuthentificationChecker'
import Routing from '../Routing';
import { injectGlobal } from 'styled-components';



injectGlobal`
body{
  margin:0;
  padding: 0;
  background:linear-gradient( rgb(141, 189, 185),rgb(109, 160, 163),rgb(107, 145, 146)) no-repeat;
  text-align:center;
 
}

a{
  text-decoration: none;
  font-size: 1.2rem;
  color:lightgray;
  font-family: 'Arial Narrow Bold', sans-serif;
  font-weight:bold;
  &:hover{
    color:lightcoral;
  }


}

.Nav--menu__link{
color:rgb(1, 22, 19);
font-size: 1.4rem;
}
`




const App = () =>

  <div  className="App">
    <Routing />
  </div>


export default AuthentificationChecker(App);
