
//join group is the action item that takes user info and pushes into firebase 
//

// for join group, all that needs to be done is: copy create project, when join group 
// is pressed create an event that grabs the user ID the way authorId, authorFirstName, and 
// authorLastName works

// call the reducer from project Reducer(that should not have to be synced to root reducer)

//we create an event by looking at how create project uses on submit and handle submit for the button



export const joinGroup = (user_info) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call to database
        //dispatch dispatches an action to the reducer

        
        // Make sure that we are able to pull these things from Firebase

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;


        firestore.collection("projects").add({

        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });  
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};