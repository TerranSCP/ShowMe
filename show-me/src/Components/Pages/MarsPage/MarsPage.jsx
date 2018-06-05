import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';


const MarsPage = () =>
<div> Mars Page</div>

export default AuthorisationChecker(authCondition)(MarsPage);