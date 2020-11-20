import React from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
          <h2>Phase 2-2</h2>
          <button className="button" onClick={this.handleOpen}>
            + Add List
          </button>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Phase 2-2</h2>
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
  state = { isEditing: false, pendingValue: "", inputText: [] };

  showTypeArea = () => {
    this.setState({ isEditing: true });
  };

  hideTypeArea = () => {
    this.setState({ isEditing: false });
  };

  getInput = (event) => {
    // console.log(event.currentTarget.value);
    this.setState({ pendingValue: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.pendingValue);
    let updateText = this.state.inputText.push({
      id: `name${nanoid()}`,
      name: this.state.pendingValue,
    });
    this.setState({ updateText });
    this.setState({ pendingValue: "" });
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
          <DragDropContext>
            <Droppable droppableId="cardNameList">
              {(provided) => (
                <ul
                  className="cardNameList"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {this.state.inputText.map((name, index) => {
                    return (
                      <Draggable
                        key={name.id}
                        draggableId={name.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            className="cardName"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {name.name}
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <input
            type="text"
            className="inputText"
            onChange={this.getInput}
            value={this.state.pendingValue}
          ></input>
          <div className="btnGroup">
            <button className="button" type="submit">
              + Add a card
            </button>
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
