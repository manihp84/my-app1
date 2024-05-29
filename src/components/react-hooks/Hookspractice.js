import React, { useEffect, useState } from "react";
import './Hookspractice.css';

function Hookspractice() {
    const [second, setseconds] = useState(0);
    const [isRunning, setisRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) { // Only start the timer if isRunning is true
            intervalId = setInterval(() => {
                setseconds(second => second + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);
    const toggleTimer = () => {
        setisRunning(!isRunning); // Toggle the isRunning state
    };

    return (
        <div>
            <div>timer: {second}</div>
            <button onClick={toggleTimer}>{isRunning ? 'stop' : 'start'}</button>
        </div>
    );

}

export default Hookspractice;
