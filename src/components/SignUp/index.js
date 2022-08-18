import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ text, toggleSign, setToken, token }) => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect(() => {
        localStorage.clear();
    }, []);

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const pwdHandler = (event) => {
        setPwd(event.target.value);
    };

    const signHandler = () => {
        const err = document.getElementById('err');
        if (!name || !pwd) {
            return;
        }
        if (!toggleSign) {
            fetch('http://localhost:2000/signup', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    password: pwd,
                    events: [],
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    setToken(response.insertedId);
                    localStorage.setItem('user', response.insertedId);
                    console.log(response.insertedId);
                })
                .catch(console.log);
            navigate('/home');
        } else {
            fetch('http://localhost:2000/signin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    password: pwd,
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response === 'invalid') {
                        err.appendChild(document.createTextNode(response));
                    } else if (response === 'admin') {
                        navigate('/admin');
                    } else if (response == null) {
                        console.log(response);
                    } else {
                        setToken(response);
                        localStorage.setItem('user', response);
                        console.log(response);
                        navigate('/home');
                    }
                })
                .catch(console.log);
        }
        console.log(token);
    };

    return (
        <div className='signup'>
            <div className='title'>{text}</div>
            <div className='sign-info'>
                <div>
                    <div>Enter Name</div>
                    <input className='sign-input' onChange={nameHandler} />
                </div>
                <div>
                    <div>Enter Password</div>
                    <input className='sign-input' onChange={pwdHandler} />
                </div>
            </div>
            <button className='toggle-sign' onClick={signHandler}>
                <div className='toggle-text'>{text}</div>
            </button>
            <div id='err'></div>
        </div>
    );
};

export default SignUp;
