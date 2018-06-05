import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';


const EarthPage = () =>
<div> Earth Page</div>

export default AuthorisationChecker(authCondition)(EarthPage);