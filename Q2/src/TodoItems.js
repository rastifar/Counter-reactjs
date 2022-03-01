import React, { Component } from 'react'

export default class TodoItems extends Component {
  render() {
    //console.log(this.props)
    return (
      <li style={{ background: 'pink', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        {this.props.index}
        {this.props.title}
        <button onClick={this.props.remove}>X</button>
        <button onClick={this.props.doneToDo}>done</button>
      </li>
    )
  }
}
