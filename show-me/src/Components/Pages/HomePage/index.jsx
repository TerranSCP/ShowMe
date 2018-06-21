import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import {StyledText,StyledLi} from '../../../StyledComponents/index';

const HomePage = () =>
    <div>
        <StyledText>
       Simple Application based on Nasa and Space-X Api's 
        </StyledText>
        <StyledText>
            ShowMe give you access to:</StyledText>
            <ul>
                <StyledLi>1)Photos from Mars rover</StyledLi>
                <StyledLi>2)List of Space-x launches, with a description of each </StyledLi>
                <StyledLi>3)Nasa image gallery</StyledLi>
                <StyledLi>4)Astronomy picture of the day</StyledLi>
            </ul>
        
    </div>



export default AuthorisationChecker(authCondition)(HomePage);