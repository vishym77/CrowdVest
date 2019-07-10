import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

// import { withFireBase } from '../Firebase'
// import * as ROUTES from 'routes';

// const SignUp = () => (
//   <div>
//     <h1>SignUp</h1>
//     <SignUpForm />
//   </div>
// );

class SignUpPage extends Component {
    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
        }

  render() {
    return (
      <Container className="App">
        <h2>Sign Up</h2>
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

// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   passwordOne: '',
//   passwordTwo: '',
//   error: null
// };

// class SignUpFormBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }


//   onSubmit = event => {
//     const { username, email, passwordOne } = this.state;

//     this.props.firebase
//       .doCreateUserWithEmailAndPassword(email, passwordOne)
//       .then(authUser => {
//         this.setState({ ...INITIAL_STATE});
//         this.props.history.push(ROUTES.HOME);
//       })
//       .catch(error => {
//         this.setState({ error });
//       });

//       event.preventDefault();
//   };


//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     const {
//       username,
//       email,
//       passwordOne,
//       passwordTwo,
//       error
//     } = this.state;

//     const isInvalid =
//       passwordOne !== passwordTwo ||
//       passwordOne === '' ||
//       email === '' ||
//       username === '';

//     return(
//       <form onSubmit={this.onSubmit}>
//         <input
//           name="username"
//           value={username}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Full Name"
//          />
//         <input 
//           name="email"
//           value={email}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Email Address"
//         />
//         <input 
//           name="passwordOne"
//           value={passwordOne}
//           onChange={this.onChange}
//           text="password"
//           placeholder="Password"
//         />
//         <input 
//           name="passwordTwo"
//           value={passwordTwo}
//           onChange={this.onChange}
//           text="password"
//           placeholder="Password"
//         />
//         <button disabled={isInvalid} type="submit">Sign Up</button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

// const SignUpLink = () => (
//   <p>
//     Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//   </p>
// );

// const SignUpForm = compose(
//   withRouter,
//   withFireBase,
// )(SignUpFormBase);

export default SignUpPage;

// export { SignUpForm, SignUpLink};