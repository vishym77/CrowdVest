const initState = {}
/*
    projects: [
        {id: '1', title: 'Facebook', content: 'Join my group if ur cool'},
        {id: '2', title: 'Google', content: 'Join my group if ur nerdy'},
        {id: '3', title: 'Amazon', content: 'Join my group if u like big packages'}
    ]
}
*/

// in tutorial, called projectReducer

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROFILE_SUCCESS':
            console.log('create profile success', action.profile);
            return state;
        case 'CREATE_PROFILE_ERROR':
            console.log('create profile error', action.err);
            return state;
        default:
            return state;    
    }
};

export default profileReducer;