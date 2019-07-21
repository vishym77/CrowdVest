export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
          userName: newUser.userName
        });
      }).then(resp => {
        return firestore.collection('profiles').add({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          userName: newUser.userName
        })
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }

//   export const signUpProfile = (pro_file) => {
//     return (dispatch, getState, { getFirebase, getFirestore } ) => {
//         //make async call to database
//         const firestore = getFirestore();
//         const profile = getState().firebase.profile;
//         const authorId = getState().firebase.auth.uid;


//         firestore.collection("profiles").set({
//           ...pro_file,
//           // authorFirstName: profile.firstName, 
//           // authorLastName: profile.lastName,
//           // authorId: authorId,
//           createdAt: new Date()
//         }).then(() => {
//             dispatch({ type: 'CREATE_PROFILE_SUCCESS' });  
//         }).catch((err) => {
//             dispatch({ type: 'CREATE_PROFILE_ERROR', err});
//         })
//     }
// }