import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFireBase } from '../Firebase'

const INITIAL_STATE = {
    owner: '',
    groupname: '',
    error: null
};

class CreateGroupPageBase extends React.Component {  
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
    }

    render() {
      return(
          <h1>hello world</h1>
      )
    }
}


const CreateGroupPage = compose(
    withRouter,
    withFireBase,
  )(CreateGroupPageBase);

export default CreateGroupPage;