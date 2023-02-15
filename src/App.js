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
          <div className='navigation'>
            <nav>
              <ul className='navigation'>
                <li className='navigation'>
                  <Link to="/" className='App-link'>Home</Link>
                </li>
                <li className='navigation'>
                  <Link to="/about" className='App-link'>About</Link>
                </li>
                <li className='navigation'>
                  <Link to="/contact" className='App-link'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
            );
  }
}

export default App;