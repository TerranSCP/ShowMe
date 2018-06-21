import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'


const Loader = () =>
<FontAwesomeIcon style ={{width:'5%',height:'5%',position:'absolute',top:'15%',left:'80%'}} icon = {faSpinner} spin/>

export default Loader;
