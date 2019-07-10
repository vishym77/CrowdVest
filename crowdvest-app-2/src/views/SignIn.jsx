import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';

// import { SignUpLink } from '../SignUp';
// import { withFireBase } from '../Firebase'
// import * as ROUTES from './routes';

// import style from "./style";

class SignInPage extends Component {
    validateEmail(e) {
        const emailRex = /^\"?[\w-_\.]*\"?@ucsc\.edu$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
        }

    // validateEdu(e) {
    //     return /^\"?[\w-_\.]*\"?@ucsc\.edu$/.test(e);
    // } 

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SignInPage;

// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   error: null
// };

// class SignInFormBase extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = event => {
//     const { email, password } = this.state;

//     this.props.firebase
//       .doSignInWithEmailAndPassword(email, password)
//       .then(() => {
//         this.setState({ ...INITIAL_STATE});
//         this.props.history.push(ROUTES.HOME);
//       })
//       .catch(error => { error });

//     event.preventDefault();
//   };

//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     const {
//       email,
//       password,
//       error
//     } = this.state;
    
//     const isInvalid = password === '' || email === '';

//     return(
//       <form>
//         <input 
//           name="email"
//           style={style.form}
//           value={email}
//           type="text"
//           onChange={this.onChange}
//           placeholder="Email Address"
//         />
//         <input 
//           name="password"
//           style={style.form}
//           value={password}
//           type="password"
//           onChange={this.onChange}
//           placeholder="Password"
//         />
//         <button disabled={isInvalid} style={style.button} type="submit">Sign In</button>

//         {error && <p>{error.message}</p>}
//       </form>
//     )
//   }
// }

// class SignInGoogleBase extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { error: null };
//   }

//   onSubmit = event => {
//     this.props.firebase
//     .doSignInWithGoogle()
//     .then(socialAuthUser => {
//       // Create a user in your Firebase Realtime Database too
//       return this.props.firebase
//         .user(socialAuthUser.user.uid)
//         .set({
//           username: socialAuthUser.user.displayName,
//           email: socialAuthUser.user.email,
//           roles: {},
//         });
//     })
//     .then(() => {
//       this.setState({ error: null });
//       this.props.history.push(ROUTES.HOME);
//     })
//     .catch(error => {
//       this.setState({ error });
//     });

//     event.preventDefault();
//   };

//   render() {
//     const { error } = this.state;

//     return (
//       <form onSubmit={this.onSubmit}>
//         <button type="submit">Sign In with Google</button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

// const SignInForm = compose(
//   withRouter,
//   withFireBase,
// )(SignInFormBase);

// const SignInGoogle = compose(
//   withRouter,
//   withFireBase,
// )(SignInGoogleBase);

// export { SignInForm, SignInGoogle }
