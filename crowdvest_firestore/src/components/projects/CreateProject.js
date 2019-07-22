import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    group_return: '',
    sp500_return: '',
    fund_beta: ''
    

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


  render(){
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to = '/signin' />
    return(
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 className = "grey-text text-darken-3">Create a Group</h5>
          <p>(Only one Group Allowed per user. New Group Creations will override old Group)</p>



          <div className="input-field">
            <label htmlFor= "title">Group Name</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <textarea id="content" className="materialize-textarea"  onChange={this.handleChange}></textarea>
            <label htmlFor= "content">Group Strategy Information </label>
          </div>

          <div className="input-field">
          <textarea id="group_return" className="materialize-textarea"  onChange={this.handleChange}></textarea>
            <label htmlFor= "content">Annualized Group Return Since Inception</label>
          </div>

          <div className="input-field">
          <textarea id="sp500_return" className="materialize-textarea"  onChange={this.handleChange}></textarea>
            <label htmlFor= "content">Annualized SP500 Return Since Inception</label>
          </div>

          <div className="input-field">
          <textarea id="fund_beta" className="materialize-textarea"  onChange={this.handleChange}></textarea>
            <label htmlFor= "content">Group Beta Since Inception</label>
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
