import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Auth />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
                {/* <Home /> */}
            </div>
        </Router>
    );
}

export default App;
