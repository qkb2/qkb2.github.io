import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul className='Navigation'>
                <li className='Navigation'>
                  <Link to="/">Home</Link>
                </li>
                <li className='Navigation'>
                  <Link to="/about">About</Link>
                </li>
                <li className='Navigation'>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/" element={<About/>}/>
              <Route exact path="/" element={<Contact/>}/>
            </Routes>
          </div>
            );
  }
}

export default App;