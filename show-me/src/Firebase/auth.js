import firebase from 'firebase';


//create user in firebase
export const doCreateUser = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

//sign-in user
export const doSignInUser = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);


//sign out user
export const doSignOutUser = () =>
    firebase.auth().signOut();


//password reset
export const doPasswordReset = (email) =>
    firebase.auth().sendPasswordResetEmail(email);

//password update 
export const doPasswordUpdate = (newPassword) =>
    firebase.auth().currentUser.updatePassword(newPassword);

//auth state observer

export const observeOnAuthStateChanged = (callback) =>
    firebase.auth().onAuthStateChanged(callback);

