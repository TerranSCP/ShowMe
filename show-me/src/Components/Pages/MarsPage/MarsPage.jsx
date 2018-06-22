import React, { Component } from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import { authCondition } from '../../UserAuthContext/authCondition';
import { apiKey } from '../../Const/urlParts'
import axios from 'axios';
import Button from '../../Buttons'
import MarsTable from './MarsTable';
import Loader from '../../Loader';
import {StyledContainer,StyledForm,StyledText, StyledTextHover} from '../../../StyledComponents/index';

 


const MarsPhotosLibrary = () =>
    <div> 
   <MarsLibrary />
    </div>


const VIA_PROPS = (propname, value) => {
    
    return { [propname]: value }


}



class MarsLibrary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            resp: null,
            page: 0,
            searchTerm: '',
            loading:false
        };


    }



    fetchData = (searchTerm) => {

        const { page } = this.state

        this.setState({loading:true})

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&camera=${searchTerm}&api_key=${apiKey}`)
            .then(result => this.setSearch(result.data.photos))
            .catch(error => error)

    }


    setSearch = (resp) => {

        this.setState({ resp , loading:false });

    }


    nextPage = (searchTerm, event) => {
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

    remove = (id) => {

        const newResp = this.state.resp.filter(elem => elem.id !== id);
        this.setSearch(newResp);
    }

    render() {

        const { resp, page, searchTerm, loading } = this.state;

        const isInvalid = page <= 1;
        const currentCam = <StyledText > Current CAM : {searchTerm}</StyledText> ;


        return (


            <div className='Mars--library__wrapper'  >

               

                <StyledContainer style = {{ background:'gray', minHeight:'15rem'}} className='Mars--form__wrapper'>

                <StyledText> Photos from mars rover droid (choose cam) : </StyledText>
                    <StyledForm  >



                        <label>  <StyledTextHover>FRONTAL CAMERA </StyledTextHover>   <input style = {{display:'none'}}  type='checkbox' value='fhaz' onChange={event => {this.setState(VIA_PROPS('searchTerm', event.target.value)) ; event.target.checked = false }} /> </label>
                        <label> <StyledTextHover> REAR CAMERA </StyledTextHover>  <input style = {{display:'none'}} type='checkbox' value='rhaz' onChange={event => {this.setState(VIA_PROPS('searchTerm', event.target.value)) ; event.target.checked = false }} /> </label>
                        <label> <StyledTextHover>MAST CAMERA </StyledTextHover>  <input style = {{display:'none'}} type='checkbox' value='mast' onChange={event => {this.setState(VIA_PROPS('searchTerm', event.target.value)) ; event.target.checked = false }} /> </label>
                        <label> <StyledTextHover>PANORAMIC CAMERA</StyledTextHover> <input style = {{display:'none'}} type='checkbox' value='pancam' onChange={event => {this.setState(VIA_PROPS('searchTerm', event.target.value)) ; event.target.checked = false }} /> </label>

                        <Button text = 'Search' className='button  button__search' type='button' onClick={() => { this.setState({ page: 1 }); setTimeout(() => { this.fetchData(searchTerm, page) }, 500) }}></Button>


                    </StyledForm>
                  
                </StyledContainer >

                {loading? <Loader/> : null}
                {currentCam ? currentCam : null}
                
            <StyledContainer style = {{marginBottom:'50px'}}>

                <Button text='Prev' type='button' className='button  button__prev' disabled={isInvalid} onClick={() => this.prevPage(searchTerm)} />
                <Button text='Next' type='button' className='button  button__next' onClick={() => this.nextPage(searchTerm)} />

               
            

            </StyledContainer>

                {resp ? <MarsTable resp={resp} remove={this.remove} style={{ width: '80%' }} /> : null}





            </div>

        );
    }


}

export default AuthorisationChecker(authCondition)(MarsPhotosLibrary);