import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'


const Loader = () =>
<FontAwesomeIcon style ={{width:'5%',height:'5%',position:'absolute',top:'25%',left:'60%'}} icon = {faSpinner} spin/>

export default Loader;
