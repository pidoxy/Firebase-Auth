import React from 'react';

const HomePage = () => (
    <div>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>LOG IN</button>
            <a href="#">Forgot Password</a>

            <span>Don't have an account?<a href="#">Sign Up</a></span>
        </form>

    </div>
);

export default HomePage;