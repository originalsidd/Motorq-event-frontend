import React, { useState } from 'react';
import { FaCameraRetro } from 'react-icons/fa';

const EventCard = (props) => {
    const [delpop, setDelpop] = useState(false);

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
        props.setChanged(!props.changed);
    };

    const handleRegister = () => {};
    const handleDeRegister = () => {};

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
