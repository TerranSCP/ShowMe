import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';

const HomePage = () =>
<div>Home page!</div>



export default AuthorisationChecker(authCondition)(HomePage);