import React from 'react';
import {ResponsiveImage,StyledResponsiveBlock,StyledContainer,ResponsiveText} from '../../../StyledComponents/index';


const SpaceXTable = ({ resp }) => {

    let counter = 0;
  
    return (

      <StyledContainer className='spaceX--table' >
  
        {
  
          resp.map(item => {
            return (

              <StyledResponsiveBlock key={`response--block__${counter++}`} style={{justifyContent:'space-between'}}>
               
                <h2>{item.mission_name}</h2>
                <ResponsiveText>{item.launch_year}</ResponsiveText>
                <ResponsiveText>{`Launch success : ${item.launch_success}`}</ResponsiveText>
                <ResponsiveText>{item.details}</ResponsiveText>
                    
                <ResponsiveImage  alt='mission patch been here' key={item.flight_number} src={item.links.mission_patch} />

              <div style = {{display:'flex',flexDirection:'column'}} >
                <a  href = {item.links.video_link}>YOUTUBE</a>
                <a  href = {item.links.wikipedia}>Wiki Link</a>
              </div>

              </StyledResponsiveBlock>
            );
          })
        }
  
  
  
      </StyledContainer>
    )
  }
  
  
  export default SpaceXTable;