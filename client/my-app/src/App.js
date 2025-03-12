import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <h1>hello my project😂😂</h1>
      <Router>
        <Counter />
      </Router>

      
    </div>
  );
}

export default App;
