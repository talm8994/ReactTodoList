import React from "react"
import "./App.css"
import Todos from "./components/Todos"
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "kiss adam ",
        completed: false,
      },
      {
        id: 3,
        title: "Learn React",
        completed: false, //oof
      },
    ],
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    })
  }

  addTodo = title => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    )
  }
}

export default App
