import { useState, useEffect } from "react";

function Countdown() {
 
  const electionDate = new Date("2029-04-19T00:00:00");

  const calculateTimeLeft = () => {
    const difference = electionDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 mt-10 text-center">
      <h2 className="text-3xl font-bold text-blue-700">
        🗳️ Next General Election
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-6">

        <div>
          <h1 className="text-4xl font-bold text-orange-500">
            {timeLeft.days}
          </h1>
          <p>Days</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-green-600">
            {timeLeft.hours}
          </h1>
          <p>Hours</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-blue-600">
            {timeLeft.minutes}
          </h1>
          <p>Minutes</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-red-500">
            {timeLeft.seconds}
          </h1>
          <p>Seconds</p>
        </div>

      </div>
    </div>
  );
}

export default Countdown;