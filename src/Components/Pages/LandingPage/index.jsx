import React  from 'react';
import {StyledHeader,StyledText} from '../../../StyledComponents/index';
import {RotatedImg} from '../../../StyledComponents/index';
import image from '../../App/images/satelite.png'


const LandingPage =  ()  =>  
    <div style = {{position:'relative' }}>

    <StyledHeader>Welcome to ShowMe app.</StyledHeader>
    <StyledText>Know more about space programs and investigate amazing things!</StyledText>
    <RotatedImg  src = {image}></RotatedImg>
     </div>
   

export default LandingPage;