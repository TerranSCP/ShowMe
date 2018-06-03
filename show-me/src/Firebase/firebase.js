import * as firebase from 'firebase';


const DEV_CONFIG = {
    apiKey: "AIzaSyAkK6r8QyKEeDIM0UBnFRpu1p2zldAqgd4",
    authDomain: "showmedev-8e136.firebaseapp.com",
    databaseURL: "https://showmedev-8e136.firebaseio.com",
    projectId: "showmedev-8e136",
    storageBucket: "showmedev-8e136.appspot.com",
    messagingSenderId: "572085785230"
};


const PROD_CONFIG = {
    apiKey: "AIzaSyB9Ih9BwLEiVXqJpYtQa8KzVQz2CvjZP7c",
    authDomain: "showmeprod-3542a.firebaseapp.com",
    databaseURL: "https://showmeprod-3542a.firebaseio.com",
    projectId: "showmeprod-3542a",
    storageBucket: "showmeprod-3542a.appspot.com",
    messagingSenderId: "675576470593"
};


const config = process.env.NODE_ENV === 'production' ? PROD_CONFIG : DEV_CONFIG;

if (!firebase.apps.length) {
    firebase.initializeApp(config)    
}

export const auth = firebase.auth();







