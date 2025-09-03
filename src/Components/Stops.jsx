import { useState, useEffect } from "react";

function Stops() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const stopTime = (time) => {
    
    const hours = Math.floor(time / 3600000);
     const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
 const milliseconds = Math.floor((time % 1000) / 10);
     return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };
  const handleStart = () => setIsRunning(true);

const handlePause = () => setIsRunning(false);

const handleReset = () => {
  setIsRunning(false);
  setTime(0);
  setLaps([]);
};

const handleLap = () => {
  if (isRunning) {
    setLaps((prevLaps) => [...prevLaps, time]);
  }
};


  return (
    <div className="h-screen justify-center inset-0 items-center">
      <div>
        <h1 className="text-3xl">STOPWATCH</h1>
        <p className="bg-gray-300 w-50 h-30 flex text-black text-2xl justify-center items-center">{stopTime(time)}</p>
        <div className="flex ">
          <button className="bg-black text-white rounded-2xl w-20 cursor-pointer"
          onClick={handleStart}
          >
            START
          </button>
          <button className="bg-red-400 text-white rounded-2xl w-20 cursor-pointer"
          onClick={handlePause}
          >
            Pause
          </button>
          <button className="bg-red-700 text-white rounded-2xl w-20 cursor-pointer"
          onClick={handleReset}
          >
            RESET
          </button>
          <button className="bg-blue-600 text-white rounded-2xl w-20 cursor-pointer"
          onClick={handleLap}>
            LAP
          </button>
        </div>

        <div>
          <h1>LAPS</h1>
          {laps.map((lap, index) => (
            <h2 key={index}>{stopTime(lap)}</h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stops;
