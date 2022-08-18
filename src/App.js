import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Admin from './pages/Admin';

function App() {
    const [token, setToken] = React.useState('');
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route
                        path='/'
                        element={<Auth token={token} setToken={setToken} />}
                    />
                    <Route path='/admin' element={<Admin />} />
                    <Route
                        path='/home'
                        element={<Home token={token} setToken={setToken} />}
                    />
                </Routes>
                {/* <Home /> */}
            </div>
        </Router>
    );
}

export default App;
