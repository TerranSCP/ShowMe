import React , {Component} from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import {apiKey,MAX_DATE,dateChecker} from '../../Const/urlParts'
import axios from 'axios';
import Loader from '../../Loader';
import Button from '../../Buttons/index';
import {StyledInput,StyledText,StyledContainer,ResponsiveText} from '../../../StyledComponents/index'


const ApodPage = () =>
<div>  <StyledText>See the wonderful astromomy picture of the day!</StyledText>
     <ApodForm/></div>

const VIA_PROPS = (propname, value) => {
    return { [propname]: value }

}

const MIN_DATE = `1996-01-01`;


class ApodForm extends Component {

    constructor(props) {

        super(props);

        this.state = {       
            resp: null,
            date: '',
            loading:false
        };


    }



    fetchData = (searchTerm) => {

        const { date } = this.state
        
        if(!dateChecker(date,MAX_DATE,MIN_DATE)){
            return
        }

        this.setState({loading:true})
        
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
            .then(result => this.setSearch(result.data))
            .catch(error => error)

    }


    setSearch = (resp) => {

        this.setState({ resp , loading:false });

    }



    render() {

        const { date, resp ,loading} = this.state;

    

        return (


            <StyledContainer className='Apod__wrapper'  >




                <form style={{ marginBottom: '100px' }} >


                    <StyledInput min={MIN_DATE} max={MAX_DATE} type='date' value={date} onChange={event => this.setState(VIA_PROPS('date', event.target.value))} />
                    <Button text = 'Search' className='button  button__search' type='button' onClick={() =>  this.fetchData(date) }></Button>


                </form>

            {loading? <Loader/> : null}

              {resp ? 

                <div className = 'Apod--picture__wrapper' style = {{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <StyledText>{resp.title}</StyledText>
                    <img style = {{maxWidth:'80%'}} alt='p' src = {resp.url}/>
                    <ResponsiveText style = {{maxWidth:'60%'}}>{resp.explanation}</ResponsiveText>
                    <ResponsiveText>{resp.copyright}</ResponsiveText>
                </div>
              
              : null}

            </StyledContainer>

        );
    }


}



export default AuthorisationChecker(authCondition)(ApodPage);