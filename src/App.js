import React, {Component} from 'react';
import Todo from './Todo'
import logo from './logo.svg';
import './App.css';

//Everything in this project is going to be local instead of creating a database. Keeps it simple.
const todos = [
  {
    id: 1,
    task: "Clean Bedroom",
    submitted: "2018-02-22",
    completed: false
  }, {
    id: 2,
    task: "Take Trash Out",
    submitted: "2018-02-22",
    completed: true
  }
];

localStorage.setItem('todos', JSON.stringify(todos));

//I intend to use props within my constructor, so I have to call on super() because it's calling the the parent element. Without it, this.props is undefined. Properties (props) and state are just plain javascript objects. Props get passed to the component, and state is managed within the component. Think of state like declaring a variable inside of a function (It's private).
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    //  Will define methods later. Commenting out for now so we're not thrown errors. Will remove comments in later pushes to github.
    //  this.isCompleted = this.isCompleted.bind(this);
    //  this.addTask = this.addTask.bind(this);
    //  this.editTask = this.editTask.bind(this);
  }
  componentWillMount() {
    this.getTodos();
  }

  getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    this.setState({todos});
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">React Todo</h1>
        <p className="App-intro">
          Showing a simple process of creating a todo app using React.
        </p>
      </header>

      {
        this.state.todos.map(todo => {
          return (<Todo key={todo.id} {...todo}/>)
        })
      }

    </div>);
  }
}

export default App;
