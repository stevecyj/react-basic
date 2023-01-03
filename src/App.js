import './App.css';

const style = { color: 'red', fontSize: '30px' };
const activeFlag = true;

function App() {
  return (
    <div className="App">
      <span style={style}>this is span</span>
      <span className={activeFlag ? 'active' : ''}>this is span2</span>
    </div>);
}

export default App;
