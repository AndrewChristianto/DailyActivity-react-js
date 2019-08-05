import React, { Component } from 'react';
import './App.css';
import Header from './header'; 

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] }
  }

  addTodo = (e) => {
    e.preventDefault();

    let time = this.refs.time.value;
    let activity = this.refs.activity.value;

    this.state.todos.push({time, activity});

    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.time.focus();
  }

  removeTodo = (i) => {
    this.state.todos.splice(i,1);
    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.time.focus();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form ref="formulir" className="form-inline">
          <input type="text" className="form-control" size="8" ref="time" placeholder="time" />
          <input type="text" className="form-control" size="30" ref="activity" placeholder= "activity" />
          <button onClick={this.addTodo} className="btn btn-info">simpan</button>
        </form>
        <hr />
      <div>
        <ul> 
          {this.state.todos.map((data, i) =>
            <li key={i}>
              <div className="todo-wrapper">
                <button onClick={()=>this.removeTodo(i)} className="btn btn-outline-danger">hapus</button> {data.time} : {data.activity}
              </div>
            </li>
          )}    
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
