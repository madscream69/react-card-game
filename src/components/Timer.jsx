import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Timer({ setTimeIsUp, prematurely, seconds, setSeconds }) {
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((sec) => sec - 1);
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const cancelInterval = () => {
        if (seconds < 1) {
            clearInterval(intervalRef.current);
            setTimeIsUp(true);
        }
        if (prematurely) {
            clearInterval(intervalRef.current);
        }
    };
    cancelInterval();
    useEffect(() => {
        if (seconds < 1) {
            setTimeIsUp(true);
        }
    }, [setTimeIsUp, seconds]);
    return (
        <div className="timer">
            <p>
                Time left: {`${Math.floor(seconds / 60)}`.padStart(2, 0)}:
                {`${seconds % 60}`.padStart(2, 0)}
            </p>
        </div>
    );
}
export default Timer;
