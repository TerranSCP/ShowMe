import {database} from './firebase';

 export const createDbUser = (id,username,email) =>{

    database.ref(`users/${id}`).set({username,email});
}


export const UserInfo = () => {
    database.ref(`users/`).once('value');
}



