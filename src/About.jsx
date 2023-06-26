import './App.css';
import React from 'react';

class About extends React.Component {
    
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <h2>About Page</h2>
                    <p>
                        I'm a 2nd year student at PUT in Poznań. My interests include microcotrollers etc.
                        Me and my friend even constructed a working line follower robot with our own PCB using Atmega8 once
                        - I can provide videos if requested.
                        I meddle in C if needed, know a little bit of statistics and data analysis - Pandas included, can perform
                        rudimentary operations in IOS for Cisco devices, would settle to work with most technologies
                        if given a chance.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tWV4MuFYxNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </header>
            </div>
        )
    }
}



export default About;