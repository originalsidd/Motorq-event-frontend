import React from 'react';

const Header = ({ setPage }) => {
    return (
        <div className='header'>
            <div className='header-links' onClick={() => setPage('events')}>
                Events
            </div>
            <div
                className='header-links'
                onClick={() => setPage('user-events')}
            >
                Registered Events
            </div>
            <div className='header-links' onClick={() => setPage('events-map')}>
                Map Page
            </div>
        </div>
    );
};

export default Header;
