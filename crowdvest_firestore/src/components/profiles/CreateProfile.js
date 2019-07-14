import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProfile } from '../../store/actions/profileActions'
import { Redirect } from 'react-router-dom'

class CreateProfile extends Component {
  state = {
    title: '',
    email: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProfile(this.state);
    this.props.history.push('/');  }


  render(){
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to = '/signin' />
    return(
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 className = "grey-text text-darken-3">Create a Profile</h5>

          <div className="input-field">
            <label htmlFor= "title">Enter a username.</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <textarea id="content" className="materialize-textarea"  onChange={this.handleChange}></textarea>
            <label htmlFor= "content">A short bio about your interests here.</label>
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
    createProfile: (profile) => dispatch(createProfile(profile))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile)
