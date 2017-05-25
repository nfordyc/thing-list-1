import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import Actions from './Actions'

class Thing extends Component{
  componentDidMount(){
    if(!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  updateDate = (ev) => {
    const { thing, saveThing } = this.props
    thing.dueDate = ev.target.value
    saveThing(thing)
  }

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  checked = (ev) => {
    const { thing, completeThing } = this.props
    completeThing(thing)
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  isComplete = (ev) => {
    const { thing } = this.props
    return thing.completed
  }
  
  render(){
    const { thing, removeThing, completeThing } = this.props
    return (
      <li className="Thing">
        <input type="checkbox" value="on" onChange={this.checked} checked={this.props.thing.completed}/>
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <input className="due-date" value={this.props.thing.dueDate} type="date" onChange={this.updateDate} />
          <span>
            <i className={this.props.thing.completed ? "fa fa-check" : "fa fa-times"}></i>
          </span>
          <Actions thing={thing} removeThing={removeThing}/>
        </div>
      </li>
    )
  }
}

export default Thing