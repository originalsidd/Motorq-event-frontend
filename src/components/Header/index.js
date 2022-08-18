import React from 'react';

const Header = ({ setPage, admin }) => {
    return (
        <div className='header'>
            {admin ? (
                <>
                    <div
                        className='header-links'
                        onClick={() => setPage('ev-manage')}
                    >
                        Events Management
                    </div>
                    <div
                        className='header-links'
                        onClick={() => setPage('verify')}
                    >
                        Verify Participants
                    </div>
                </>
            ) : (
                <>
                    <div
                        className='header-links'
                        onClick={() => setPage('events')}
                    >
                        Events
                    </div>
                    <div
                        className='header-links'
                        onClick={() => setPage('user-events')}
                    >
                        Registered Events
                    </div>
                    <div
                        className='header-links'
                        onClick={() => setPage('events-map')}
                    >
                        Map Page
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;
