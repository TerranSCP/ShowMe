import React from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import {StyledText,StyledLi} from '../../../StyledComponents/index';

const HomePage = () =>
    <div>
        <StyledText>
       Simple Application based on Nasa and Space-X Api's 
        </StyledText>

            <ul style = {{display:'flex',alignItems:'stretch',flexDirection:'column',padding:'0'}}>

                   <StyledLi> <StyledText>
            ShowMe give you access to:</StyledText> </StyledLi>

                <StyledLi> <StyledText>1)Photos from Mars rover</StyledText></StyledLi>
                <StyledLi> <StyledText>2)List of Space-x launches, with a description of each </StyledText> </StyledLi>
                <StyledLi> <StyledText>3)Nasa image gallery</StyledText></StyledLi>
                <StyledLi><StyledText>4)Astronomy picture of the day</StyledText></StyledLi>
            </ul>
        
    </div>



export default AuthorisationChecker(authCondition)(HomePage);