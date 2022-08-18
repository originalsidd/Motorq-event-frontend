import React, { useState, useContext, useEffect } from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { UserId } from '../../pages/Home';

const EventCard = (props) => {
    const [delpop, setDelpop] = useState(false);
    const value = useContext(UserId);
    const [clicked, setClicked] = useState(false);
    const [count, setCount] = useState(0);

    const deleteHandler = () => {
        if (!props.disflag) setDelpop(true);
        props.setDisflag(true);
    };

    const deleteEventHandler = (event) => {
        fetch(`http://localhost:2000/events/${props.id}`, {
            method: 'delete',
        });
        setDelpop(false);
        props.setDisflag(false);
        props.setChanged2(!props.changed3);
        props.fetchEvents();
    };

    const handleRegister = () => {
        let code = Math.floor(Math.random() * 1000000000000);
        fetch(`http://localhost:2000/events/${value}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_id: props.id,
                code,
            }),
        });
        console.log(code);
        props.setChanged(!props.changed);
        setClicked(!clicked);
    };
    const handleDeRegister = () => {
        setCount(count + 1);
        if (count == 1);
        else {
            fetch(`http://localhost:2000/events/de/${value}`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    event_id: props.id,
                }),
            });
        }
        props.setChanged2(!props.changed2);
        setClicked(!clicked);
    };

    useEffect(() => {
        props.fetchEvents();
    }, [props.changed, props.changed2, props.changed3, clicked]);

    return (
        <div className='card'>
            <div className='event-row'>
                <div className='event-row' style={{ marginRight: 10 }}>
                    <div className='event-info'>
                        <div className='event-name'>{props.name}</div>
                        <div className='event-description'>{props.desc}</div>
                    </div>
                    <div className='event-info'>
                        <div className='event-time'>
                            Start Time: {props.stime}
                        </div>
                        <div className='event-time'>
                            End Time: {props.etime}
                        </div>
                        <div className='event-cap'>Capacity: {props.cap}</div>
                    </div>
                </div>
                <div className='logo'>
                    <FaCameraRetro size={150} />
                </div>
            </div>
            {delpop && (
                <div className='modal1'>
                    Are you sure you want to delete this event?
                    <div className='confirm'>
                        <button
                            className='event-add close'
                            onClick={() => {
                                setDelpop(false);
                                props.setDisflag(false);
                            }}
                        >
                            No
                        </button>
                        <button
                            className='event-add close'
                            onClick={deleteEventHandler}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            )}
            {props.del ? (
                <div className='event-modify'>
                    <button className='event-delete' onClick={deleteHandler}>
                        Delete
                    </button>
                    <button
                        className='event-update'
                        onClick={() => props.updateHandler(props.id)}
                    >
                        Update
                    </button>
                </div>
            ) : props.dereg ? (
                <div>
                    <button
                        className='event-add reg'
                        onClick={handleDeRegister}
                    >
                        De-Register
                    </button>
                </div>
            ) : (
                <div>
                    <button className='event-add reg' onClick={handleRegister}>
                        Register
                    </button>
                </div>
            )}
        </div>
    );
};

export default EventCard;
