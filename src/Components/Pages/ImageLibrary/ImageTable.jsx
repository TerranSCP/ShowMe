import React from 'react';
import {ResponsiveImage,StyledResponsiveBlock,StyledContainer,RemoveButton,ResponsiveText} from '../../../StyledComponents/index';



const ImageTable = ({ resp,remove }) => {

  let counter = 0;

  return (

    <StyledContainer className='image--table'>

      {

        resp.map(item => {
          return (
            <StyledResponsiveBlock key={`response--block__${counter++}`} style={{ position:'relative',justifyContent:'flex-start'}}>
                <RemoveButton className='remove__button' onClick = {()=>remove(item.data[0].nasa_id)}>X</RemoveButton>
              <h2>{item.data[0].center}</h2>
              <ResponsiveImage  alt='something got wrong' key={item.data[0].nasa_id} src={item.links[0].href} />
              {/*dont do something like thing below  in real project */}
              <ResponsiveText dangerouslySetInnerHTML={{ __html: item.data[0].description }}></ResponsiveText>
            </StyledResponsiveBlock>
          );
        })
      }



    </StyledContainer>
  )
}


export default ImageTable;