import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyAItQyc02w6gS7Ng_MSONIO2iFGUE1Nkd4",
    authDomain: "react-session.firebaseapp.com",
    projectId: "react-session",
    storageBucket: "react-session.appspot.com",
    messagingSenderId: "282095507181",
    appId: "1:282095507181:web:4c1d2c57211990587b9ee4",
    measurementId: "G-8DRTHP25EX"
};

firebase.initializeApp(firebaseConfig)
const analytics=firebase.analytics()

const database = firebase.database()

export { database,analytics, firebase as default }

