import React from "react";
import "./App.css";

class InputForm extends React.Component {
  state = {
    isEditing: false,
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: "" });
  };

  handleOpen = () => {
    this.setState({ isEditing: true });
  };

  handleClose = () => {
    this.setState({ isEditing: false });
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Phase 1-2</h2>
          <button className="button" onClick={this.handleOpen}>
            + Add List
          </button>
          <button className="button" onClick={this.handleClose}>
            X
          </button>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Phase 1-2</h2>
          <input
            type="text"
            id="newTodoInput"
            className="inputText"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="button">
            + Add List
          </button>
          <button className="button" onClick={this.handleClose}>
            X
          </button>
        </form>
      );
    }
  }
}

const Todo = (props) => {
  // console.log(props);
  return (
    <li className="todo">
      <div className="boxWraper">
        <label>{props.name}</label>
      </div>
      <div className="btnGroup"></div>
    </li>
  );
};

// function App() {
class App extends React.Component {
  state = {
    data: [],
  };

  handleAddTask = (content) => {
    console.log(content);
    let newData = this.state.data;
    // console.log(newData);
    newData.push({
      id: this.state.data.length,
      name: content,
      completed: false,
    });
    // console.log(newData);
    this.setState(newData);
    // console.log(this.state);
  };

  render() {
    console.log(this.state);
    // console.log(this.state.data);
    return (
      <div className="App">
        <InputForm addTask={this.handleAddTask} />

        <ul className="todoList">
          {this.state.data.map((item) => (
            <Todo
              name={item.name}
              completed={item.completed}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
