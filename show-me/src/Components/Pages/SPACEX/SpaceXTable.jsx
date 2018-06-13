import React from 'react';



const SpaceXTable = ({ resp }) => {

    let counter = 0;
  
    return (

      <div className='spaceX--table' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
  
        {
  
          resp.map(item => {
            return (
              <div key={`response--block__${counter++}`} style={{ width: '25%', height: 'auto', display: 'flex', marginBottom: '15px', marginLeft: '15px', flexDirection: 'column', border: '2px solid #000' }}>
               
                <h2>{item.mission_name}</h2>
                <span>{item.launch_year}</span>
                <span>{`Launch success : ${item.launch_success}`}</span>
                <span>{item.details}</span>
                    
                <img  style={{ width: '100%', height: '300px' }} alt='mission patch been here' key={item.flight_number} src={item.links.mission_patch} />
                <span style={{ width: '100%' }}><a href = {item.links.video_link}>YOUTUBE</a></span>
                <span ><a href = {item.links.wikipedia}>Wiki Link</a></span>
              </div>
            );
          })
        }
  
  
  
      </div>
    )
  }
  
  
  export default SpaceXTable;