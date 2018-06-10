import React from 'react';
import Button from '../../Buttons/Button';


const MarsTable = ({ resp,remove }) => {

  let counter = 0;

  return (
    <div className='image--table' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

      {

        resp.map(item => {
          return (
            <div key={`response--block__${counter++}`} style={{ width: '25%', height: 'auto', display: 'flex', marginBottom: '15px', marginLeft: '15px', flexDirection: 'column', border: '2px solid #000' }}>
                <button className='remove__button' onClick = {()=>remove(item.id)}>Del</button>
              <h2>{item.camera.full_name}</h2>
              <img style={{ width: '100%', height: '300px' }} alt='image' key={item.id} src={item.img_src} />

            </div>
          );
        })
      }



    </div>
  )
}


export default MarsTable;