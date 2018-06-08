import React from 'react';

const ImageTable = ({ resp }) => {

    let counter = 0;

    return (
        <div className='image--table' style = {{ display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>

            {

                resp.map(item => {
                    return (
                    <div key = {`response--block__${counter++}`} style={{width:'25%', height:'auto',display:'flex',marginBottom:'15px',marginLeft:'15px',flexDirection:'column',border:'2px solid #000'}}>
                        <h2>{item.data[0].center}</h2>            
                        <img style={{width:'100%', height:'300px'}}  alt = 'image' key={item.data[0].nasa_id} src={item.links[0].href } />
                        <span dangerouslySetInnerHTML= {{__html:item.data[0].description}}></span> 
                    </div> 
                    );
                })
            }

        </div>
    )
}


export default ImageTable ;