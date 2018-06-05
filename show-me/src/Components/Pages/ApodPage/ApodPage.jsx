import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';


const ApodPage = () =>
<div> Apod Page</div>

export default AuthorisationChecker(authCondition)(ApodPage);