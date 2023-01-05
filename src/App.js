import React from "react";
import './App.css';

class Counter extends React.Component {

  state = {
    message: 'this is message'
  };

  inputChange = (e) => {
    console.log('trigger change event', e.target.value);
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.inputChange}/>
      </div>);
  }
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>);
}

export default App;
