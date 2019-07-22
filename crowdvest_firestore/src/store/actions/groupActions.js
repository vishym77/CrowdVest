
//we probably need projectid and userid but anyparameter that lets
// is talk to the database is fine

export const joinGroup = (user, project) => {

    // dispatch pushes the action item through to the reducer
    // getState allows us to get the state of the store if we need to
    return (dispatch, getState) => {




        dispatch ({  type: 'Join_Group',  project  })
    }



};