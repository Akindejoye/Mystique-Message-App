import React, { useState, useEffect } from 'react';
import Timez from '../../css/Times.module.css';

const Time = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className={Timez.timeWrapper}>
            <img src="/images/time.svg" alt="time" />
            <p className={Timez.date}>
              {' '}
              {dateState.toLocaleDateString('en-US', {
                month: 'short',
                 day: 'numeric',
                 year: 'numeric',
              })}
            </p>
            <p className={Timez.time}>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}

export default Time;