import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdR4il_KY8YyExnqiNW57Fmm5tl-qmJHo",
    authDomain: "crowdvest-84514.firebaseapp.com",
    databaseURL: "https://crowdvest-84514.firebaseio.com",
    projectId: "crowdvest-84514",
    storageBucket: "crowdvest-84514.appspot.com",
    messagingSenderId: "975449803470",
    appId: "1:975449803470:web:d796548a6c493d2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;