import React, { createRef } from "react";
import './App.css';

class Counter extends React.Component {

  msgRef = createRef();
  state = {
    message: 'this is message'
  };
  inputChange = (e) => {
    console.log('trigger change event', e.target.value);
    this.setState({ message: e.target.value });
  };

  getValue = () => {
    console.log(this.msgRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.inputChange} ref={this.msgRef}/>
        <br/>
        <input type="text" ref={this.msgRef}/>
        <button onClick={this.getValue}>get input value</button>
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
