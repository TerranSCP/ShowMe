import React , {Component} from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import SpaceXTable from './SpaceXTable'
import Button from '../../Buttons';
import axios from 'axios';
import ByYears from '../../Filters/ByYears'
import Loader from '../../Loader'


const SpaceXPage = () =>
<div> SpaceX latest launches information !
    <SpaceXLaunches/>
</div>




class SpaceXLaunches extends Component {

    constructor(props) {

        super(props);

        this.state = {
         
            resp: null,
            loading:false
            
        };


    }



    fetchData = () => {

      
        this.setState({loading:true})

        axios.get(`https://api.spacexdata.com/v2/launches`)
            .then(result => this.setSearch(result.data))
            .catch(error => error)

    }


    setSearch = (resp) => {

        this.setState({ resp , loading:false });

    }



    render() {

        const {  resp , loading } = this.state;
         const isInvalid = resp === null;

      
     
       return (


            <div className='SpaceX__wrapper'  >




                <form style={{ marginBottom: '100px' }} >


                   
                    <Button className='button  button__load' type='button' onClick={() => this.fetchData()} text = 'Load'></Button>


                </form>



               <Button text = 'Sort By Years' disabled={isInvalid} onClick ={()=> this.setState(ByYears({resp}))}/>

               {loading? <Loader/> : null}
               {resp ? <SpaceXTable resp={resp}  style={{ width: '80%' }} /> : null}




            </div>

        );
    }


}





export default AuthorisationChecker(authCondition)(SpaceXPage);