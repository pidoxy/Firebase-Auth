import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation/navigation';

import LandingPage from './components/Landing/landing';
import SignUpPage from './components/SignUp/signup';
import SignInPage from './components/SignIn/signin';
import PasswordForgetPage from './components/PasswordForget/passwordforget';
import HomePage from './components/Home/home';
import AccountPage from './components/Account/account';
import AdminPage from './components/Admin/admin';

import * as ROUTES from './components/constants/routes';
import { withFirebase } from './components/Firebase';

import { AuthUserContext } from './components/Session';

import { withAuthentication } from '../Session';
 
const App = () => (
      <AuthUserContext.Provider value={this.state.authUser}>
      <Router>
        <div>
          <Navigation  />
          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
      </AuthUserContext.Provider>
);
 
export default withAuthentication(App);








// const App = () => {

//   const [authUser, setAuthUser] = useState(null);

//   useEffect(() => {
//     props.firebase.auth.onAuthStateChanged(authUser => {
//       authUser ? setAuthUser( ) : setAuthUser(null);
//     });    
//   })
//   componentDidMount() {

//   }
//   return(
//   <Router>
//     <div>
//       <Navigation authUser={props.authUser}/>

//       <hr />

//       <Route exact path={ROUTES.LANDING} component={LandingPage} />
//       <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//       <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
//       <Route path={ROUTES.HOME} component={HomePage} />
//       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//       <Route path={ROUTES.ADMIN} component={AdminPage} />
//     </div>
//   </Router>
// );
//   }

// export default App;