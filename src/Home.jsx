import './App.css';
import React from 'react';
// import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h2>Welcome to my homepage!</h2>
                <p>
                    I'm Jakub Grabowski and I study Computer Engineering at Poznan University of Technology (PUT/PP).
                    If you are interested in what I do or would like to hire me - let me know.
                </p>
                </header>
            </div>
            
        );
    }

}

export default Home;