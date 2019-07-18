export const signUpProfile = (profile) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;


        firestore.collection("profiles").add({
            ...profile,
            authorFirstName: profile.firstName, 
            authorLastName: profile.lastName,
            userName: profile.userName,
            authorId: authorId,
        }).then(() => {
            dispatch({ type: 'CREATE_PROFILE_SUCCESS' });  
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROFILE_ERROR', err});
        })
    }
};