import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import SignOut from './SignOut'
import SignIn from './SignIn'
import base, { auth } from './base'

class App extends Component {

state = {
    things: {},
    uid: null,
  }

  componentWillMount() {
    base.syncState(
      'things',
      {
        context: this,
        state: 'things'
      }
    )
  }

  authHandler = (authData) => {
    this.setState({uid: authData.user.uid})
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      dueDate: 'mm/dd/yyyy',
    }
  }

  completeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id].completed = !things[thing.id].completed
    this.setState({ things })
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    auth.signOut().then(() => this.setState({uid: null}))
  }

  renderMain = () => {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      completeThing: this.completeThing
    }

    return (
      <div>
        <SignOut signOut={this.signOut} />
        <AddThingButton addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    )
  }

  render() {

    return (
      <div className="App">
        <Header />

        {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/>}
        
      </div>
    );
  }
}

export default App;
