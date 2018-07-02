import React from 'react';
import {StyledContainer,ResponsiveImage,StyledText,StyledResponsiveBlock,RemoveButton} from '../../../StyledComponents/index'

const MarsTable = ({ resp,remove }) => {

  let counter = 0;

  return (

    <StyledContainer className='image--table' >

      {

        resp.map(item => {

          return (

            <StyledResponsiveBlock style ={{position:'relative'}} key={`response--block__${counter++}`}>

              <RemoveButton className='remove__button' onClick = {()=>remove(item.id)}>X</RemoveButton>
              <StyledText>{item.camera.full_name}</StyledText>
              <ResponsiveImage  alt='r' key={item.id} src={item.img_src} />

            </StyledResponsiveBlock>

          );
        })
      }



    </StyledContainer>
  )
}


export default MarsTable;