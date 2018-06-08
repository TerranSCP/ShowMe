import React, { Component } from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import { authCondition } from '../../UserAuthContext/authCondition';
import { apiKey, domainUrl, EARTH_LINK_PARTS } from '../../Const/urlParts'
import axios from 'axios';

import ImageTable from './ImageTable';



const NasaImageLibrary = () =>
    <div> Nasa Image Library
   <ImageLibrary />
    </div>

const MAX_DATE = `${new Date().getFullYear()}-\
${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-\
${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`




const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}



class ImageLibrary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            searchTerm: '',
            resp: null
        };




    }



    fetchData = (searchTerm) => {

       

        axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`)
            .then(result => this.setSearch(result.data.collection.items))
            .catch(error => error)

    }



    setSearch = (resp) => {

       
          this.setState({ resp });
        


    }

    render() {

        const { searchTerm, resp } = this.state;

       

        return (


            <div className='Earth-form__wrapper'  >




                <form style = {{marginBottom:'100px'}} >


                <input  type='text' value={searchTerm} onChange={event => this.setState(VIA_PROPS('searchTerm', event.target.value))} />
                <button type = 'button'  onClick = {()=> this.fetchData(searchTerm)}>SEARCH</button>
                  

                </form>

              {  resp ? <ImageTable resp = {resp} style = {{width :'80%'}} /> : null   }


            </div>

        );
    }


}


export default AuthorisationChecker(authCondition)(NasaImageLibrary);



