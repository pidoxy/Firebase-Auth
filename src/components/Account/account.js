import React from 'react';

import { PasswordForgetForm } from '../PasswordForget/passwordforget';
import PasswordChangeForm from '../PasswordChange/passwordchange';
import { AuthUserContext, withAuthorization } from '../Session';

import Container from '@material-ui/core/Container';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container maxWidth={`xs`} >
        <h1 align="center">Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </Container>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);