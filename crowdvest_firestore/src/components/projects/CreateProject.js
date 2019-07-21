import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

//this populates project with a title and content
//Thats what is being pushed to the database with this structure

class CreateProject extends Component { 
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');  }

//The code below takes in Group Name and Group information(using HandleChange)
//


  render(){
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to = '/signin' />    //Checks if user is signedin
    return(
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 className = "grey-text text-darken-3">Create a Group</h5>

          <div className="input-field">
            <label htmlFor= "title">Group Name</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <textarea id="content" className="materialize-textarea"  onChange={this.handleChange}></textarea>
            <label htmlFor= "content">Group Information</label>
          </div>

          <div className="input-field">
            <button className= "btn pink lighten-1  z-depth-0">Create</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
