import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFireBase } from '../Firebase'
import * as ROUTES from '../../constants/routes';

import style from "./style";

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignInGoogle />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  error: null
};

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => { error });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };



  render() {
    const {
      email,
      password,
      error
    } = this.state;
    
    const isInvalid = password === '' || email === '';

    return(
      <form>
        <input 
          name="email"
          style={style.form}
          value={email}
          type="text"
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <input 
          name="password"
          style={style.form}
          value={password}
          type="password"
          onChange={this.onChange}
          placeholder="Password"
        />
        <button disabled={isInvalid} style={style.button} type="submit">Sign In</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

class SignInGoogleBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
    .doSignInWithGoogle()
    .then(socialAuthUser => {
      // Create a user in your Firebase Realtime Database too
      return this.props.firebase
        .user(socialAuthUser.user.uid)
        .set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
    })
    .then(() => {
      this.setState({ error: null });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
    });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFireBase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFireBase,
)(SignInGoogleBase);

export default SignInPage;

export { SignInForm, SignInGoogle }
