import React, { useState } from 'react';
import Header from './../components/Header';
import EvManage from './../components/EvManage';
import Verify from './../components/Verify';

const Home = () => {
    const [page, setPage] = useState('ev-manage');
    return (
        <div>
            <Header setPage={setPage} admin={true} />
            <div className='wrapper'>
                {page === 'ev-manage' ? <EvManage /> : <Verify />}
            </div>
        </div>
    );
};

export default Home;
