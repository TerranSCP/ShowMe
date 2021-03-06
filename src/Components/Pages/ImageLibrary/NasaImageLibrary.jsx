import React, { Component } from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import { authCondition } from '../../UserAuthContext/authCondition';
import axios from 'axios';
import Button from '../../Buttons'
import ImageTable from './ImageTable';
import Loader from '../../Loader'

import {StyledContainer,StyledForm,StyledInput,StyledText} from '../../../StyledComponents/index'



const NasaImageLibrary = () =>
    <div>  <StyledText> Nasa Image Library </StyledText>
   <ImageLibrary />
    </div>


const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}



class ImageLibrary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            searchTerm: 'orion',
            resp: null,
            page: 0,
            loading:false
        };


    }


    fetchData = (searchTerm) => {

        const { page } = this.state

        this.setState({loading:true})

        axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image&page=${page}`)
            .then(result => this.setSearch(result.data.collection.items))
            .catch(error => error)

    }


    setSearch = (resp) => {

        this.setState({ resp , loading:false });

    }


   nextPage = (searchTerm) => {
        const { page } = this.state;
        this.setState({ page: page + 1 })
        setTimeout(() => {
            this.fetchData(searchTerm, page)
        }, 500)
    }

    prevPage = (searchTerm) => {
        const { page } = this.state;
        this.setState({ page: page - 1 })
        setTimeout(() => {
            this.fetchData(searchTerm, page)
        }, 500)
    }

    remove = (id) =>{
           
             const newResp = this.state.resp.filter(elem => elem.data[0].nasa_id !== id  );
            this.setSearch(newResp);
    }

    render() {

        const { searchTerm, resp, page , loading } = this.state;

        const isInvalid = searchTerm === '' || page < 1;
     




        return (


            <StyledContainer style = {{ background:'gray', minHeight:'15rem'}} className='Library__wrapper'  >




                <StyledForm style={{ marginBottom: '100px' }} >


                    <StyledInput type='text' value={searchTerm} onChange={event => this.setState(VIA_PROPS('searchTerm', event.target.value))} />
                    <Button className='button  button__search' type='button' text = 'Search' onClick={() => {this.setState({page:1}) ; setTimeout( () =>{ this.fetchData(searchTerm, page)},500)}}></Button>


                </StyledForm>

                <Button text='prev' type='button' className='button  button__prev' disabled={isInvalid} onClick={() => this.prevPage(searchTerm)} />
                <Button text='next' type='button' className='button  button__next' disabled={isInvalid} onClick={() => this.nextPage(searchTerm)} />

              
                 
                {loading? <Loader/> : null}
                {resp ? <ImageTable resp={resp} remove={this.remove} style={{ width: '80%' }} /> : null}


              


            </StyledContainer>

        ) ;
    }


}


export default AuthorisationChecker(authCondition)(NasaImageLibrary);



