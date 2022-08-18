import React, { useState, useEffect } from 'react';
import Header from './../components/Header';
import Events from './../components/Events';
import UserEvents from './../components/UserEvents';
import EventsMap from './../components/EventsMap';

export const UserId = React.createContext();

const Home = ({ token, setToken }) => {
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            console.log(loggedInUser);
            setToken(loggedInUser);
        }
    }, []);

    const [page, setPage] = useState('events');
    return (
        <div>
            <UserId.Provider value={token}>
                <Header setPage={setPage} admin={false} />
                <div className='wrapper'>
                    {page === 'events' ? (
                        <Events />
                    ) : page === 'user-events' ? (
                        <UserEvents />
                    ) : (
                        <EventsMap />
                    )}
                </div>
            </UserId.Provider>
        </div>
    );
};

export default Home;
