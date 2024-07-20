// CountdownTimer.js
import React, { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.css';

const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor((difference % 1000) / 10),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
        <div className={styles.timer} >
      <span key={interval} className={styles.timeSection}>
        <span className={styles.label}>{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
        <span className={styles.time}>{timeLeft[interval].toString().padStart(2, '0')}</span>
      </span>
        {interval !== 'milliseconds' && <span className={styles.separator}>:</span>}
        </div>
    );
  });

  return (
    <div className={styles.countdown}>
      {timerComponents.length ? timerComponents : <span className={styles.expired}>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;
