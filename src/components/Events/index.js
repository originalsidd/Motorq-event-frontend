import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import SearchBar from '../SearchBar';

const Events = () => {
    const [eventList, setEventList] = useState([]);
    const [filteredEventList, setFilteredEventList] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('http://localhost:2000/events')
            .then((response) => response.json())
            .then((response) => {
                setEventList(response);
                setFilteredEventList(response);
            });
    }, []);

    const handleSearch = () => {
        const filteredEvents = eventList.filter((event) =>
            event.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredEventList(filteredEvents);
    };

    return (
        <div className='EventCards'>
            <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {filteredEventList.map((event) => (
                <EventCard name={event.name} desc={event.desc} />
            ))}
        </div>
    );
};

export default Events;
