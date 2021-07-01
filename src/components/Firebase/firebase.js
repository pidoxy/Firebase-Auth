import app from 'firebase';
import 'firebase/auth';
import 'firebase/database';

// const prodConfig = {
//     apiKey: "AIzaSyC__qWeHaDIALwF__2udhR-5IUVHwbUkE8",
//     authDomain: "react-firebase-authentic-132db.firebaseapp.com",
//     // databaseURL: YOUR_DATABASE_URL,
//     projectId: "react-firebase-authentic-132db",
//     storageBucket: "react-firebase-authentic-132db.appspot.com",
//     messagingSenderId: "163125782110",

// };

const devConfig = {
    apiKey: "AIzaSyC__qWeHaDIALwF__2udhR-5IUVHwbUkE8",
    authDomain: "react-firebase-authentic-132db.firebaseapp.com",
    // databaseURL: YOUR_DATABASE_URL,
    projectId: "react-firebase-authentic-132db",
    storageBucket: "react-firebase-authentic-132db.appspot.com",
    messagingSenderId: "163125782110",

};

class Firebase {
    constructor() {
        app.initializeApp(devConfig);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();


    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;