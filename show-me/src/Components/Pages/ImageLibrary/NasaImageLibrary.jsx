import React, { Component } from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import { authCondition } from '../../UserAuthContext/authCondition';
import { apiKey, domainUrl, EARTH_LINK_PARTS } from '../../Const/urlParts'
import axios from 'axios';
import Button from '../../Buttons/Button'
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
            searchTerm: 'mars',
            resp: null,
            page: 0
        };


    }



    fetchData = (searchTerm) => {

        const { page } = this.state

        axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image&page=${page}`)
            .then(result => this.setSearch(result.data.collection.items))
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

    render() {

        const { searchTerm, resp, page } = this.state;

        const isInvalid = searchTerm === '' || page < 1;
     




        return (


            <div className='Library__wrapper'  >




                <form style={{ marginBottom: '100px' }} >


                    <input type='text' value={searchTerm} onChange={event => this.setState(VIA_PROPS('searchTerm', event.target.value))} />
                    <button className='button  button__search' type='button' onClick={() => {this.setState({page:1}) ; setTimeout( () =>{ this.fetchData(searchTerm, page)},500)}}>SEARCH</button>


                </form>

                <Button text='prev' type='button' className='button  button__prev' disabled={isInvalid} onClick={() => this.prevPage(searchTerm)} />
                <Button text='next' type='button' className='button  button__next' disabled={isInvalid} onClick={() => this.nextPage(searchTerm)} />

                {resp ? <ImageTable resp={resp} style={{ width: '80%' }} /> : null}





            </div>

        );
    }


}


export default AuthorisationChecker(authCondition)(NasaImageLibrary);



