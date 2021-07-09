import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="passwordOne"
            type="password"
            value={passwordOne}
            onChange={this.onChange}
            label="New Password"
            name="passwordOne"
            autoComplete="passwordOne"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="passwordTwo"
            type="password"
            value={passwordTwo}
            onChange={this.onChange}
            label="Confirm New Password"
            name="passwordTwo"
            autoComplete="passwordTwo"
          />
          <Button
            disabled={isInvalid}
            type="submit"
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

export default withFirebase(PasswordChangeForm);