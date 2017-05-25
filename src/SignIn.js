import React from 'react'

import { auth, githubProvider } from './base.js'

import './SignIn.css'

const SignIn = ({ authHandler }) => {
    const authenticate = (provider) => {
        auth
            .signInWithPopup(provider)
            //.then(authData => authHandler(authData))
    }

    return (
        <button onClick={() => authenticate(githubProvider)} className="SignIn">
            Sign In With GitHub
        </button>
    )
}

export default SignIn