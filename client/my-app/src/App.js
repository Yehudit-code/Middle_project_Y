import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'; 
import User from './Components/User'
import Post from "./Components/Post"
import Todo from "./Components/Todo"
import Photo from "./Components/Photo"
import Home from "./Components/Home"
import MenuBar from './Components/MenuBar';

function App() {
  return (

    <div className="App">
 <Router>
  <MenuBar/>
            <Routes>
               <Route path="/" element={<Home/>} /> 
                <Route path="/user" element={<User />} />
                <Route path="/post" element={<Post />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
