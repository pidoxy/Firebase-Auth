import React from 'react';

const LandingPage = () => (
    <div>
        <div className={'landing-image'} ></div>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>LOG IN</button>
            <a href="/pw-forget">Forgot Password</a>

            <span>Don't have an account?<a href="/signup">Sign Up</a></span>
        </form>

    </div>
);

export default LandingPage;