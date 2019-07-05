import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: `${process.env.REACT_APP_API_KEY_YT}`,
    authDomain: "https://crowdvest.firebaseapp.com/",
    databaseURL: "",
    projectId: "crowdvest-84514",
    storageBucket: '',
    messagingSenderId: '',
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }

  
  
  export default Firebase;