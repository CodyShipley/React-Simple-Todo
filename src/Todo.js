import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  render(){
    const {task,submitted,completed} = this.props;
    return(
      <div>
        <h3>{task}</h3>
        <h6>Submitted on {submitted}</h6>
        <span>Completed:<input type="checkbox" defaultChecked={completed}/></span>
      </div>
    );
  }
}

export default Todo;
