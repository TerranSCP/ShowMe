import React from 'react';
import AuthentificationChecker from '../UserAuthContext/AuthentificationChecker'
import Routing from '../Routing';
import { injectGlobal } from 'styled-components';

injectGlobal`

body{
  margin:0;
  padding: 0;
  background:gray;
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
color:rgb(60, 60, 60);
font-size: 1.4rem;
}
`




const App = () =>

  <div  className="App">
    <Routing />
  </div>


export default AuthentificationChecker(App);
