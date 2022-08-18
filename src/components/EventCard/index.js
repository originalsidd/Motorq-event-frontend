import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';

const EventCard = (props) => {
    return (
        <div className='card'>
            <div className='event-info'>
                <div className='event-name'>{props.name}</div>
                <div className='event-description'>{props.desc}</div>
            </div>
            <div className='logo'>
                <FaCameraRetro size={150} />
            </div>
        </div>
    );
};

export default EventCard;
