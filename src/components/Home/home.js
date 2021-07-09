import { Container, Typography } from '@material-ui/core';
import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
    <Container align="center" >
        <h1>Home Page</h1>
        <Typography>The Home Page is accessible by every signed in user.</Typography>
    </Container>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);