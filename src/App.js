import logo from './logo.svg';
import './App.css';
import ColorBox from './ColorBox';
import colors from './colors';

let numOfBoxes = 16

let numArr = [...Array(numOfBoxes+1).keys()].slice(1);

function App() {
  return (
    <div className="App">
      {numArr.map(n => <ColorBox key={n} id={n} color={colors}/>)}
    </div>
  );
}

export default App;
