import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import User from './Components/User'
import Post from "./Components/Post"
import Todo from "./Components/Todo"
import Photo from "./Components/Photo"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Home from "./Components/Home"
import MenuBar from './Components/MenuBur';
=======
import Todo from './Components/Todo';
import User from './Components/User';
import Post from './Components/Post';
import Photo from './Components/Photo';
import Home from './Components/Home';
import MenuBar from './Components/MenuBar';

>>>>>>> 747bf3b099ddd2f231049e258987023f5d47d69f

function App() {
  return (

    <div className="App">
<<<<<<< HEAD
 {/* <h1>Hello world😋😉🌍</h1> */}
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


=======
    
      
      <Router>
      <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<Post />} />
          <Route path="/photo" element={<Photo />} />

        </Routes>
      </Router>


>>>>>>> 747bf3b099ddd2f231049e258987023f5d47d69f
    </div>
  );
}

export default App;
