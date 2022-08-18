import React, { useState } from 'react';
import Header from './../components/Header';
import Events from './../components/Events';
import UserEvents from './../components/UserEvents';
import EventsMap from './../components/EventsMap';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState('events');
    return (
        <div>
            <Header setPage={setPage} />
            <div className='wrapper'>
                {page === 'events' ? (
                    <Events />
                ) : page === 'user-events' ? (
                    <UserEvents />
                ) : (
                    <EventsMap />
                )}
            </div>
        </div>
    );
};

export default Home;
