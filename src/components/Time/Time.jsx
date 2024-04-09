import React, { useEffect, useState } from "react";
import "./main.css";
export default function Time() {
  const currentTime =
    new Date().getFullYear() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getDay() +
    " " +
    new Date().getHours() +
    ":" +
    String(new Date().getMinutes()).padStart(2, "0");
  const [time, setTime] = useState(currentTime);
  let intervalId = "";
  useEffect(() => {
    intervalId = setInterval(() => {
      setTime(currentTime);
    }, 1000);
    return () => {
      /* 组件卸载的时候清楚定时器 */
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="time_container">
      <i class="ri-time-line"></i>
      <span className="time">{time}</span>
    </div>
  );
}
