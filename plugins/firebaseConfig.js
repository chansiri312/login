import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDJJTzA7BF-qydP-anHHLPgKfNfKWD2u1w",
    authDomain: "login-10-f1186.firebaseapp.com",
    projectId: "login-10-f1186",
    storageBucket: "login-10-f1186.appspot.com",
    messagingSenderId: "185515227531",
    appId: "1:185515227531:web:0131a25a75867d9f7f978e"
  };
  firebase.initializeApp(firebaseConfig)
}
export const shopshop = firebase.firestore()
export const auth = firebase.auth()