import React from 'react'

import { auth, githubProvider } from './base.js'

import './SignIn.css'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return (
        <button onClick={() => authenticate(githubProvider)} className="SignIn">
            Sign In With GitHub
        </button>
    )
}

export default SignIn