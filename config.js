import firebase from 'firebase'
require ("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCjxR6iFJ_WtiytW1_mFXIImedIGjqYilw",
    authDomain: "storyhub-d8f1b.firebaseapp.com",
    databaseURL: "https://storyhub-d8f1b-default-rtdb.firebaseio.com",
    projectId: "storyhub-d8f1b",
    storageBucket: "storyhub-d8f1b.appspot.com",
    messagingSenderId: "379030480289",
    appId: "1:379030480289:web:17783f71fbf28df1ed57e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();