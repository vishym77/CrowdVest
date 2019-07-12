const initState = {
    projects: [
        {id: '1', title: 'Facebook', content: 'Join my group if ur cool'},
        {id: '2', title: 'Google', content: 'Join my group if ur nerdy'},
        {id: '3', title: 'Amazon', content: 'Join my group if u like big packages'}
    ]
}

// in tutorial, called projectReducer

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;    
    }
};

export default projectReducer;