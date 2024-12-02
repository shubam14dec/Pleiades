import React, { useEffect, useState } from "react";
import './Countdown.css'
const targetTime = new Date("2024-12-22").getTime();
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
</style>

export const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="counter1">
      <p className="CountHeading">STARTS IN</p>
      <p className="counter">
        <span>{days}D : </span>
        <span>{hours}H : </span>
        <span>{minutes}min : </span>
        <span>{seconds}sec </span>
      </p>
    </section>
  );
};
