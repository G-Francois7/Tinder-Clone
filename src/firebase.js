import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBOIGRgmHdr3uaKKEQTxTytMaWpnu5qtb8",
    authDomain: "tinder-clone-86461.firebaseapp.com",
    projectId: "tinder-clone-86461",
    storageBucket: "tinder-clone-86461.appspot.com",
    messagingSenderId: "783713139655",
    appId: "1:783713139655:web:3277fa155d60cf54de37e2",
    measurementId: "G-C5FJKVHQCV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;