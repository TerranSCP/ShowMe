import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';


const EpicPage = () =>
<div> Epic Page</div>

export default AuthorisationChecker(authCondition)(EpicPage);