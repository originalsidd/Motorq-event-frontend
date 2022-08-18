import React, { useEffect, useState, useContext } from 'react';
import EventCard from '../EventCard';
import SearchBar from '../SearchBar';
import { UserId } from '../../pages/Home';

const UserEvents = () => {
    const [eventList, setEventList] = useState([]);
    const [filteredEventList, setFilteredEventList] = useState([]);
    const [search, setSearch] = useState('');
    const [changed2, setChanged2] = useState(false);
    const value = useContext(UserId);

    const fetchEvents = () => {
        fetch(`http://localhost:2000/events/${value}`)
            .then((response) => response.json())
            .then((response) => {
                setEventList(response);
                setFilteredEventList(response);
            });
    };

    useEffect(() => {
        fetchEvents();
        console.log(value);
    }, [changed2]);

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
                    dereg={true}
                    changed2={changed2}
                    setChanged2={setChanged2}
                    fetchEvents={fetchEvents}
                />
            ))}
        </div>
    );
};

export default UserEvents;
