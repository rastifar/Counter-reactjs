import React, { Component } from 'react'
import TodoItems from './TodoItems';
export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            list: ['one', 'two', 'three'],
            done: []


        }
    }
    getValue = (e) => {
        //console.log(e.target.value)
        this.setState({ value: e.target.value })
    }
    addItem = () => {
        //console.log(this.state.value);
        this.setState({ list: [...this.state.list, this.state.value], value: '' })
    }
    // removeToDo=(i)=>{
    //   this.setState(state =>{
    //     return state.list.splice(i,1)
    //   }) 

    // }
    removeToDo = (todo) => {
        //    this.setState(state=>{
        //     let list=state.list.filter(l => l!==todo)
        //     return{list}
        //    })
        let list = this.state.list.filter(l => l !== todo)
        this.setState({ list: list })
    }
    doneToDo = (todo) => {
        this.removeToDo(todo)
        this.setState({ done:[todo, ...this.state.done] })
    }

    render() {
        return (<div><input value={this.state.value} onChange={this.getValue} />
            <button onClick={this.addItem}>add </button>
            <ul>
                {this.state.list.map((todo, i) => <li><TodoItems index={i + 1} title={todo} remove={() => this.removeToDo(todo)} doneToDo={() => this.doneToDo(todo)} /> </li>)}
                {this.state.done.map(tododone => <li>{tododone} </li>)}
            </ul>
        </div>


        )
    }
}
