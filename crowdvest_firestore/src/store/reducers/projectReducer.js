const initState = {
    projects: [
        {id: '1', title: 'Facebook', content: 'Join my group if ur cool'},
        {id: '2', title: 'Google', content: 'Join my group if ur nerdy'},
        {id: '3', title: 'Amazon', content: 'Join my group if u like big packages'}
    ]
}

// in tutorial, called projectReducer

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer