export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;


        firestore.collection("projects").add({
            ...project,
            authorFirstName: profile.firstName, 
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });  
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};


// for join group, all that needs to be done is: copy create project, when join group 
// is pressed create an event that grabs the user ID the way authorId, authorFirstName, and 
// authorLastName works

// call the reducer from project Reducer(that should not have to be synced to root reducer)

//we create an event by looking at how create project uses on submit and handle submit for the button



export const joinGroup = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;


        firestore.collection("projects").add({
            ...project,
            authorFirstName: profile.firstName, 
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });  
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};