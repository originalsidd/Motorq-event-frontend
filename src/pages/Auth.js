import React, { useState, useEffect } from 'react';
import ParticleBackground from 'react-particle-backgrounds';
import AuthCard from './../components/AuthCard';
import SignUp from './../components/SignUp';

const settings = {
    canvas: {
        canvasFillSpace: true,
        width: window.innerWidth,
        height: window.innerHeight,
        useBouncyWalls: true,
    },
    particle: {
        particleCount: 20,
        color: '#72d5fc',
        minSize: 10,
        maxSize: 15,
    },
    velocity: {
        directionAngle: 0,
        directionAngleVariance: 360,
        minSpeed: 1,
        maxSpeed: 3,
    },
    opacity: {
        minOpacity: 0.3,
        maxOpacity: 0.8,
        opacityTransitionTime: 3000,
    },
};

const Auth = ({ setToken, token }) => {
    const [toggleSign, setToggleSign] = useState(false);

    const toggleSignHandler = () => {
        setToggleSign(!toggleSign);
    };

    return (
        <div className='auth'>
            <ParticleBackground settings={settings} className='particle' />
            <AuthCard>
                <SignUp
                    toggleSign={toggleSign}
                    text={toggleSign ? <div>SignIn</div> : <div>SignUp</div>}
                    setToken={setToken}
                    token={token}
                />

                <button
                    className='toggle-sign-link'
                    onClick={toggleSignHandler}
                >
                    Switch to
                    {toggleSign ? (
                        <div className='toggle-text'>SignUp</div>
                    ) : (
                        <div className='toggle-text'>SignIn</div>
                    )}
                </button>
            </AuthCard>
        </div>
    );
};

export default Auth;
