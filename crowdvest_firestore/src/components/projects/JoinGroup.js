import React, {Component} from 'react'
import { connect } from 'react-redux'
import { joinGroup } from '../../store/actions/groupActions' 
import { Redirect } from 'react-router-dom'


class JoinGroup extends Component { 
    state = {
      title: '',
      content: ''
    }
  

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.joinGroup(this.state);
      this.props.history.push('/');  }
  
  //The code below takes in Group Name and Group information(using HandleChange)
  //
  
  
    render(){
      const { auth } = this.props;
      if(!auth.uid) return <Redirect to = '/signin' />    //Checks if user is signedin
      return(
        <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 className = "grey-text text-darken-3">Join This Group</h5>


          <div className="input-field">
            <button className= "btn pink lighten-1  z-depth-0">Request Join</button>
          </div>
        </form>
      </div>
        
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  //this calls the action creator groupActions
  const mapDispatchToProps = (dispatch) => {
    return {
      joinGroup: (project) => dispatch(joinGroup(project))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(JoinGroup)