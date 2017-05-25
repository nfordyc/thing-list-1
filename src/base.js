import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBfPadMmIuFxcqRsTyqqFPl02Jo5KrComE",
    authDomain: "thing-list-cea56.firebaseapp.com",
    databaseURL: "https://thing-list-cea56.firebaseio.com",
    projectId: "thing-list-cea56",
    storageBucket: "thing-list-cea56.appspot.com",
    messagingSenderId: "1053472774563"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)