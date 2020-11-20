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
          <h2>Phase 2-1</h2>
          <button className="button" onClick={this.handleOpen}>
            + Add List
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
      <AddCard />
    </li>
  );
};

class AddCard extends React.Component {
  state = { isEditing: false };

  showTypeArea = () => {
    this.setState({ isEditing: true });
  };

  hideTypeArea = () => {
    this.setState({ isEditing: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <div className="btnGroup">
          <button className="button" onClick={this.showTypeArea}>
            + Add a card
          </button>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="inputText"></input>
          <div className="btnGroup">
            <button className="button">+ Add a card</button>
            <button className="button" onClick={this.hideTypeArea}>
              X
            </button>
          </div>
        </form>
      );
    }
  }
}

// function App() {
class App extends React.Component {
  state = {
    data: [],
  };

  handleAddTask = (content) => {
    console.log(content);
    let newData = this.state.data;
    newData.push({
      id: this.state.data.length,
      name: content,
      completed: false,
    });
    this.setState(newData);
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
