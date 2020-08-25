import firebase from 'firebase';

//initialize fatabase

const firebaseConfig = {
    apiKey: "AIzaSyAWj8RMzwP69oqV1H2cbrmbTq-t-wzyufo",
    authDomain: "my-first-react-admin.firebaseapp.com",
    databaseURL: "https://my-first-react-admin.firebaseio.com",
    projectId: "my-first-react-admin",
    storageBucket: "my-first-react-admin.appspot.com",
    messagingSenderId: "1031383267074",
    appId: "1:1031383267074:web:d46b94c80a57441209f41b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;