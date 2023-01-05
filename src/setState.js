import React from "react";
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     </div>);
// }

class Counter extends React.Component {
  state = {
    count: 0,
    list: [ 1, 2, 3 ],
    person: {
      name: 'jack',
      age: 18
    }
  };

  clickHandler = () => {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ list: [ ...this.state.list, 4, 5 ] });
    // this.setState({ person: { ...this.state.person, name: 'rose' } });
    // this.setState({
    //   count: this.state.count + 1,
    //   list: [ ...this.state.list, 4, 5 ],
    //   person: { ...this.state.person, name: 'rose' }
    // });
    //   del
    this.setState({ list: this.state.list.filter(item => item !== 2) });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <div>
          {this.state.count}
          <br/>
          <button onClick={this.clickHandler}>change state
          </button>
        </div>

      </>
    );
  }
}

export default Counter;
