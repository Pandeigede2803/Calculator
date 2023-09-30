import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-semibold mb-4">Simple Calculator</h1>
        <Calculator />
      </header>
     
    </div>
  );
}

export default App;
