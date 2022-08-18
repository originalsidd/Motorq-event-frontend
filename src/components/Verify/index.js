import React from 'react';
import AuthCard from '../AuthCard';

const Verify = () => {
    const [text, setText] = React.useState('');
    const handleText = (event) => {
        setText(event.target.value);
    };
    const handleVerify = () => {
        const result = fetch(`http://localhost:2000/codes`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: text,
            }),
        });
        console.log(result);
    };
    return (
        <AuthCard>
            <div className='card'>
                <div>Verify Link</div>
                <input type='text' onChange={handleText} value={text} />
                <button className='event-add extra' onClick={handleVerify}>
                    Submit
                </button>
            </div>
        </AuthCard>
    );
};

export default Verify;
