import React from 'react';
import { FaSearchengin } from 'react-icons/fa';

const SearchBar = (props) => {
    const handleText = (event) => {
        props.setSearch(event.target.value);
    };
    return (
        <div className='search-wrapper'>
            <div className='search-bar'>
                <input className='search' type='text' onChange={handleText} />
            </div>
            <div className='search-icon' onClick={props.handleSearch}>
                <FaSearchengin size={30} />
            </div>
        </div>
    );
};

export default SearchBar;
