import React, { useState } from 'react';
import Header from './../components/Header';
import Events from './../components/Events';
import UserEvents from './../components/UserEvents';
import EventsMap from './../components/EventsMap';

export const UserId = React.createContext();

const Home = ({ token }) => {
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
