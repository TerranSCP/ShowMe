import React , {Component} from 'react';
import AuthorisationChecker from '../../UserAuthContext/AuthorisationChecker';
import {authCondition} from '../../UserAuthContext/authCondition';
import SpaceXTable from './SpaceXTable'
import Button from '../../Buttons';
import axios from 'axios';
import ByYears from '../../Filters/ByYears';
import Loader from '../../Loader';
import {StyledForm,StyledContainer,StyledText} from '../../../StyledComponents/index';


const SpaceXPage = () =>
<div>  <StyledText>SpaceX latest launches information ! </StyledText>
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


            <StyledContainer style = {{ background:'gray', minHeight:'15rem'}} className='SpaceX__wrapper'  >




                <StyledForm style={{ marginBottom: '100px' }} >


                   
                    <Button className='button  button__load' type='button' onClick={() => this.fetchData()} text = 'Load'></Button>


                </StyledForm>



               <Button text = 'Sort By Years' disabled={isInvalid} onClick ={()=> this.setState(ByYears({resp}))}/>

               {loading? <Loader/> : null}
               {resp ? <SpaceXTable resp={resp}  style={{ width: '80%' }} /> : null}




            </StyledContainer>

        );
    }


}





export default AuthorisationChecker(authCondition)(SpaceXPage);