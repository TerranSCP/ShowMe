import React , {Component} from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import {apiKey,MAX_DATE,dateChecker} from '../../Const/urlParts'
import axios from 'axios';


const ApodPage = () =>
<div> See the wonderful astromomy picture of the day!
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
            date: ''
        };


    }



    fetchData = (searchTerm) => {

        const { date } = this.state
        
        if(!dateChecker(date,MAX_DATE,MIN_DATE)){
            return
        }


        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
            .then(result => this.setSearch(result.data))
            .catch(error => error)

    }


    setSearch = (resp) => {

        this.setState({ resp });

    }



    render() {

        const { date, resp } = this.state;

    

        return (


            <div className='Apod__wrapper' style = {{display:'flex',flexDirection:'column',alignItems:'center'}}  >




                <form style={{ marginBottom: '100px' }} >


                    <input min={MIN_DATE} max={MAX_DATE} type='date' value={date} onChange={event => this.setState(VIA_PROPS('date', event.target.value))} />
                    <button className='button  button__search' type='button' onClick={() =>  this.fetchData(date) }>SEARCH</button>


                </form>

              {resp ? 
                <div className = 'Apod--picture__wrapper' style = {{display:'flex',flexDirection:'column',alignItems:'center',border:'1px solid black',width:'720px'}}>
                    <span>{resp.title}</span>
                    <img style = {{width:'700px',height:'500px'}} src = {resp.url}/>
                    <div>{resp.explanation}</div>
                    <span>{resp.copyright}</span>
                </div>
              
              : null}

            </div>

        );
    }


}



export default AuthorisationChecker(authCondition)(ApodPage);