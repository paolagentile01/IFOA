import React, { useState, useEffect } from "react";

// CurrentTime displays the current time of the searched location based on the provided `timeZoneOffset` prop.
function CurrentTime({ timeZoneOffset }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => { //This function calculates the current time by converting the UTC time to local time using the `timeZoneOffset`.
      const currentDate = new Date();
      const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
      const localTime = new Date(utcTime + (timeZoneOffset * 1000));
  
      const currentYear = localTime.getFullYear();
      const currentMonth = (localTime.getMonth() + 1).toString().padStart(2, '0');
      const currentDay = localTime.getDate().toString().padStart(2, '0');
      const currentHour = localTime.getHours().toString().padStart(2, '0');
      const currentMinute = localTime.getMinutes().toString().padStart(2, '0');
  
      const formattedTime = `${currentHour}:${currentMinute}`;
  
      setCurrentTime(formattedTime);// The formatted time is stored in the `currentTime` state variable.
    };

    // Set an initial time
    updateCurrentTime();

    // Update the time every second
    const interval = setInterval(updateCurrentTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [timeZoneOffset]);

  return (
    <span >{currentTime}</span>
  );
}

export default CurrentTime;