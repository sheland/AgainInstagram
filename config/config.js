import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDuBNxmAM40qV93RaGj5vE81ID85giyH4c",
  authDomain: "againinstagram.firebaseapp.com",
  databaseURL: "https://againinstagram.firebaseio.com",
  projectId: "againinstagram",
  storageBucket: "againinstagram.appspot.com",
  messagingSenderId: "409197058278"
 };
 firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
