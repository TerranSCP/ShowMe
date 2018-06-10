import React, { Component } from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import { authCondition } from '../../UserAuthContext/authCondition';
import { apiKey} from '../../Const/urlParts'
import axios from 'axios';
import Button from '../../Buttons/Button'
import MarsTable from './MarsTable';



const MarsPhotosLibrary = () =>
    <div> Photos from mars rover droid
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
            searchTerm:''
        };


    }

   

    fetchData = (searchTerm) => {

        const { page } = this.state

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&camera=${searchTerm}&api_key=${apiKey}`)
            .then(result => this.setSearch(result.data.photos))
            .catch(error => error)

    }


    setSearch = (resp) => {

        this.setState({ resp });

    }


   nextPage = (searchTerm,event) => {
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
           
            const newResp = this.state.resp.filter(elem => elem.id !== id  );
            this.setSearch(newResp);
    }

    render() {

        const { resp, page, searchTerm } = this.state;

        const isInvalid =  page <= 1;
     




        return (


            <div className='Mars--library__wrapper'  >




                <form style={{ marginBottom: '100px' }} >


                   
               <label> FRONTAL CAMERA<input  type = 'checkbox' value = 'fhaz' onChange = {event => this.setState(VIA_PROPS('searchTerm',event.target.value))}/> </label>
               <label> REAR CAMERA<input  type = 'checkbox' value = 'rhaz' onChange = {event => this.setState(VIA_PROPS('searchTerm',event.target.value))}/> </label>
               <label> MAST CAMERA<input  type = 'checkbox' value = 'mast' onChange = {event => this.setState(VIA_PROPS('searchTerm',event.target.value))}/> </label>
               <label> PANORAMIC CAMERA<input  type = 'checkbox' value = 'pancam' onChange = {event => this.setState(VIA_PROPS('searchTerm',event.target.value))}/> </label>
               
                    <button className='button  button__search' type='button' onClick={() => {this.setState({page:1}) ; setTimeout( () =>{ this.fetchData(searchTerm, page)},500)}}>SEARCH</button>


                </form>

                <Button text='prev' type='button' className='button  button__prev' disabled={isInvalid} onClick={() => this.prevPage(searchTerm)} />
                <Button text='next' type='button' className='button  button__next'  onClick={() => this.nextPage(searchTerm)} />

                {resp ? <MarsTable resp={resp} remove={this.remove} style={{ width: '80%' }} /> : null}





            </div>

        );
    }


}

export default AuthorisationChecker(authCondition)(MarsPhotosLibrary);