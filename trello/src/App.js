import React from "react";
import "./App.css";

class AddList extends React.Component {
  state = {
    isEditing: false,
  };
  clickAddList = () => {
    this.setState({ isEditing: true });
  };

  clickClose = () => {
    this.setState({ isEditing: true });
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <form>
          <h2>Phase 1-1</h2>
          <button className="button" id="addBtn" onClick={this.clickAddList}>
            Add List
          </button>
        </form>
      );
    } else {
      return (
        <form>
          <h2>Phase 1-1</h2>
          <input type="text" id="inputContent"></input>
          <button className="button" id="addBtn">
            Add List
          </button>
          <button className="button" id="closeButton" onClick={this.clickClose}>
            X
          </button>
        </form>
      );
    }
  }
}

class App extends React.Component {
  // state = {
  //   isEditing: false,
  // };
  // clickAddList = (event) => {
  //   this.setState({ pendingValue: event.currentTarget.value });
  // };

  render() {
    return (
      <div className="App">
        <AddList />
      </div>
    );
  }
}

export default App;
