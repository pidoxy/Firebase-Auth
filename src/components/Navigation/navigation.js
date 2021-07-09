import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/signout';
import * as ROUTES from '../constants/routes';
import { AuthUserContext } from '../Session';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff00',
    margin: theme.spacing(0, 0, 5, 0),
  },
  title: {
    flexGrow: 1,
  }

}));

const NavigationAuth = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} xs={12} md={8} position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title} >
          <Link to={ROUTES.LANDING}>Landing</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to={ROUTES.HOME}>Home</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <SignOutButton />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
const NavigationNonAuth = () => {
  const classes = useStyles();
  return (
    <div >
      <AppBar className={classes.root} position="static" gutterBottom>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default Navigation;