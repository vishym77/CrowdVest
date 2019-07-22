export const joinGroup = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        //make async call to database
        //dispatch dispatches an action to the reducer


        const firestore = getFirestore();
        const profile = getState().firebase.profile;
       // const authorId = getState().firebase.auth.uid;
        const requestEmail = getState().firebase.auth.email;
        

        //console.log(project)
        //console.log(profile.firstName);

        if (project.memberList.indexOf(requestEmail)  == -1 ) {

        project.memberList.push(requestEmail)

        }
        
        const ml = project.memberList


        firestore.collection("projects").doc(project.authorEmail).update({
            memberList: ml

        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });  
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};
