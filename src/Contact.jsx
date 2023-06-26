import './App.css';
import React from 'react';

class Contact extends React.Component {
    
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <h2>Contact Page</h2>
                    <p>
                        If you want to contact me feel free to do so <a href = "https://www.linkedin.com/in/jakub-grabowski-b30ba6264/" className='net-link'>via my linkedin profile.</a>
                    </p>
                </header>
            </div>
        )
    }
}



export default Contact;