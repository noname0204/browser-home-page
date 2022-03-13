import React, { memo, useState, useEffect, useRef } from 'react';
import classes from './DigitalClock.module.css';

interface ClockItemProps {
  time: number;
}

const ClockItem: React.FC<ClockItemProps> = memo(({ time }) => {
  // Format numbers by prepending 0 to single-digit numbers
  // Ex: 5 -> 05
  const displayTime = time.toString().padStart(2, '0');

  return <p>{displayTime}</p>;
});

const DigitalClock: React.FC = () => {
  const interval = useRef<number>();
  const date = useRef<Date>(new Date());
  const [hours, setHours] = useState<number>(date.current.getHours());
  const [minutes, setMinutes] = useState<number>(date.current.getMinutes());
  const [seconds, setSeconds] = useState<number>(date.current.getSeconds());

  useEffect(() => {
    interval.current = setInterval(() => {
      date.current = new Date();
      setHours(date.current.getHours());
      setMinutes(date.current.getMinutes());
      setSeconds(date.current.getSeconds());
    }, 100);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={classes.clock}>
      <ClockItem time={hours} />
      <ClockItem time={minutes} />
      <ClockItem time={seconds} />
    </div>
  );
};

export default DigitalClock;
