import React, { useEffect, useState, useContext } from 'react';
import EventCard from '../EventCard';
import SearchBar from '../SearchBar';
import { UserId } from '../../pages/Home';

const Events = () => {
    const [eventList, setEventList] = useState([]);
    const [filteredEventList, setFilteredEventList] = useState([]);
    const [search, setSearch] = useState('');
    const value = useContext(UserId);
    useEffect(() => {
        fetch('http://localhost:2000/events')
            .then((response) => response.json())
            .then((response) => {
                setEventList(response);
                setFilteredEventList(response);
            });
    }, []);

    const handleSearch = () => {
        const filteredEvents = eventList.filter(
            (event) =>
                event.event_name.toLowerCase().includes(search.toLowerCase()) ||
                event.event_desc.toLowerCase().includes(search.toLowerCase())
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
                <EventCard
                    key={event._id}
                    id={event._id}
                    name={event.event_name}
                    desc={event.event_desc}
                    stime={event.start_time}
                    etime={event.end_time}
                    cap={event.capacity}
                    del={false}
                />
            ))}
        </div>
    );
};

export default Events;
