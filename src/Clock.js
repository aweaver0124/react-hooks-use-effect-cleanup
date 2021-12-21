import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanip() {
      clearInterval(timerID)
    }
   }, []);

 return <div>{time.toString()}</div>
  }
 

export default Clock;
