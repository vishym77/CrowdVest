export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call to database
        //dispatch dispatches an action to the reducer


        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const authorEmail = getState().firebase.auth.email;


        firestore.collection("projects").add({
            ...project,
            authorFirstName: profile.firstName, 
            authorLastName: profile.lastName,
            authorEmail: authorEmail,
            authorId: authorId,
            createdAt: new Date(),
            requestList: [],
            memberList: [profile.firstName] 

        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });  
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};





