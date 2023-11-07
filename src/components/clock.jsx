import { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState();
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }));
      setCurrentDate(date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }));
    }, 1000);
  }, []);

  return(
    <div className="text-4xl">
        <p>{currentDate}</p>
        <p>{currentTime}</p>
    </div>
  )
}
