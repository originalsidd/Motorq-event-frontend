import React, { useState, useEffect, useCallback } from 'react';
import AuthCard from '../AuthCard';
import EventCard from '../EventCard';

const EvManage = () => {
    const [eventList, setEventList] = useState([]);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [stime, setStime] = useState('');
    const [etime, setEtime] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [cap, setCap] = useState('');
    const [vis, setVis] = useState(false);
    const [disflag, setDisflag] = useState(false);
    const [changed3, setChanged3] = useState(false);
    const [upd, setUpd] = useState(false);
    const [id, setId] = useState('');

    const fetchEvents = () => {
        fetch('http://localhost:2000/events')
            .then((response) => response.json())
            .then((response) => {
                setEventList(response);
            });
    };

    useEffect(() => {
        fetchEvents();
    }, [changed3]);

    const modalHandler = () => {
        setVis(!vis);
        setName('');
        setDesc('');
        setStime('');
        setEtime('');
        setLat('');
        setLong('');
        setCap('');
        setUpd(false);
    };

    const addHandler = () => {
        fetch('http://localhost:2000/events', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_name: name,
                event_desc: desc,
                start_time: stime,
                end_time: etime,
                location: { lat, long },
                capacity: cap,
            }),
        });
        fetchEvents();
        setChanged3(!changed3);
        setVis(false);
    };

    const updateHandler = (id) => {
        setId(id);
        setUpd(true);
        setVis(true);
        const record = eventList.find((event) => event._id === id);
        setName(record.event_name);
        setDesc(record.event_desc);
        setStime(record.start_time);
        setEtime(record.end_time);
        setLat(record.location.lat);
        setLong(record.location.long);
        setCap(record.capacity);
    };

    const updateEventHandler = () => {
        fetch(`http://localhost:2000/events/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_name: name,
                event_desc: desc,
                start_time: stime,
                end_time: etime,
                location: { lat, long },
                capacity: cap,
            }),
        });
        fetchEvents();
        setChanged3(!changed3);
        setUpd(false);
        setVis(false);
    };

    const nameHandler = (event) => {
        setName(event.target.value);
    };
    const descHandler = (event) => {
        setDesc(event.target.value);
    };
    const stimeHandler = (event) => {
        setStime(event.target.value);
    };
    const etimeHandler = (event) => {
        setEtime(event.target.value);
    };
    const latHandler = (event) => {
        setLat(event.target.value);
    };
    const longHandler = (event) => {
        setLong(event.target.value);
    };
    const capHandler = (event) => {
        setCap(event.target.value);
    };

    return (
        <div className='event-manage'>
            <div className='event-add-wrapper'>
                <button className='event-add' onClick={modalHandler}>
                    Add
                </button>
            </div>

            {vis && (
                <div className='modal'>
                    <AuthCard>
                        <div style={{ overflowY: 'scroll' }}>
                            <div>
                                <div style={{ color: 'white' }}>Event Name</div>
                                <input
                                    onChange={nameHandler}
                                    className='sign-input'
                                    value={name}
                                />
                            </div>
                            <div>
                                <div style={{ color: 'white' }}>
                                    Event Description
                                </div>
                                <input
                                    onChange={descHandler}
                                    className='sign-input'
                                    value={desc}
                                />
                            </div>
                            <div>
                                <div style={{ color: 'white' }}>
                                    Event Start Time
                                </div>
                                <input
                                    onChange={stimeHandler}
                                    className='sign-input'
                                    value={stime}
                                />
                            </div>
                            <div>
                                <div style={{ color: 'white' }}>
                                    Event End Time
                                </div>
                                <input
                                    onChange={etimeHandler}
                                    className='sign-input'
                                    value={etime}
                                />
                            </div>
                            <div>
                                <div style={{ color: 'white' }}>
                                    Event Latitude
                                </div>
                                <input
                                    onChange={latHandler}
                                    className='sign-input'
                                    value={lat}
                                />
                            </div>
                            <div>
                                <div style={{ color: 'white' }}>
                                    Event Longitude
                                </div>
                                <input
                                    onChange={longHandler}
                                    className='sign-input'
                                    value={long}
                                />
                            </div>
                            <div>
                                <div style={{ color: 'white' }}>
                                    Event Capacity
                                </div>
                                <input
                                    onChange={capHandler}
                                    className='sign-input'
                                    value={cap}
                                />
                            </div>
                        </div>
                    </AuthCard>
                    {upd ? (
                        <button
                            className='event-add close'
                            onClick={updateEventHandler}
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            className='event-add close'
                            onClick={addHandler}
                        >
                            Add
                        </button>
                    )}
                    <button className='event-add close' onClick={modalHandler}>
                        Close
                    </button>
                </div>
            )}
            {eventList.map((event) => (
                <EventCard
                    key={event._id}
                    id={event._id}
                    name={event.event_name}
                    desc={event.event_desc}
                    stime={event.start_time}
                    etime={event.end_time}
                    cap={event.capacity}
                    del={true}
                    disflag={disflag}
                    setDisflag={setDisflag}
                    setChanged3={setChanged3}
                    changed3={changed3}
                    updateHandler={updateHandler}
                    fetchEvents={fetchEvents}
                />
            ))}
        </div>
    );
};

export default EvManage;
