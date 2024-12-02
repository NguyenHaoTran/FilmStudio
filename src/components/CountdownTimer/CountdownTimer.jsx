// 26:30s

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimerLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 24)
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const formatnumber = (number) => {
        return String(number).padStart(2, '0');
    };

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] != undefined) {
            timerComponents.push(
                <span key={interval}>
                    {formatnumber(timeLeft[interval])} {interval} {''}
                </span>
            );
        }
    });

    return timerComponents;
};

export default CountdownTimer;

// 28:15
