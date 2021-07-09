import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Container component="main" maxWidth="xs">
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={this.state.email}
            onChange={this.onChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            disabled={isInvalid}
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
          >
            Reset My Password
          </Button>

          {error && <p>{error.message}</p>}
        </form>
      </Container>
    );
  }
}

const PasswordForgetLink = () => (
  <Grid item xs={5}>
    <Link href={ROUTES.PASSWORD_FORGET} variant="body2">
      Forgot password?
    </Link>
  </Grid>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };