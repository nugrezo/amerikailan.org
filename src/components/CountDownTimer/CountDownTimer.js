// CountDownTimer.js
import React, { useState, useEffect } from "react";
import "./CountDownTimer.css";
import timer_icon from "../../library/advicons/timer_icon.png";

const CountDownTimer = ({ onTimerZero, onTimerRestart }) => {
  const initialMinutes = 0.1;
  const initialSeconds = 15;
  const totalSeconds = initialMinutes * 60 + initialSeconds;
  const [remainingTime, setRemainingTime] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
        onTimerZero(); // Notify the parent component that the timer reached zero
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime, onTimerZero, onTimerRestart]); // Include onTimerRestart in dependencies

  useEffect(() => {
    // If onTimerRestart is called, restart the timer
    if (onTimerRestart) {
      setRemainingTime(totalSeconds);
    }
  }, [onTimerRestart, totalSeconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="timer_container">
      <img className="timer_icon" src={timer_icon} alt="timer_icon"></img>
      <p className="remaining_time">{formatTime(remainingTime)}</p>
    </div>
  );
};

export default CountDownTimer;
