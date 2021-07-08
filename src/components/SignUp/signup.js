import React, { Component } from 'react';
import { FirebaseContext } from '../Firebase';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'



const SignUpPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>


  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });

  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Container component="main" maxWidth="xs">

        <form onSubmit={this.onSubmit}>
          <Grid container item xs={12} >
            <Grid item xs={6} >

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                value={username}
                onChange={this.onChange}
                label="Full Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                value={email}
                onChange={this.onChange}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            value={passwordOne}
            onChange={this.onChange}
            label="Password"
            name="passwordOne"
            autoComplete="passwordOne"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            value={passwordTwo}
            onChange={this.onChange}
            label="Confirm Password"
            name="passwordTwo"
            autoComplete="passwordTwo"
            autoFocus
          />
          <Button
            disabled={isInvalid}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >Sign Up</Button>
          {error && <p>{error.message}</p>}

        </form>
      </Container>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export { SignUpForm, SignUpLink };

export default SignUpPage;