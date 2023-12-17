import { useEffect, useState } from "react";
import AnalogClock from "./analogClock";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState();
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      );
      setCurrentDate(
        date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    }, 1000);
  }, []);

  return (
    <div>
      {currentTime && currentDate ? <div className="text-4xl">
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>: <div className="flex-row"><span className="loading loading-spinner loading-lg"></span></div>}
    </div>
  );
}
