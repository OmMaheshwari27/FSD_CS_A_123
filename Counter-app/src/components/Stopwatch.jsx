import React from 'react'
import { useEffect, useState } from 'react'
const Stopwatch = () => {
    const [isrunning, setIsrunning] = useState(false);
    const [time, setTime] = useState(0);
    function handleStart() {
        setIsrunning(!isrunning);
    }
    function handleReset() {
        setTime(0);
        setIsrunning(false);
    }

    useEffect(() => {
        if(isrunning){
            setInterval(()=>{
                setTime(time=>time+1);
            },1000)
        }
        
    }, [isrunning]
    )
    return (
        <div>
            <h1>Timer</h1>
            <h1>{time}</h1>
            <button onClick={handleStart}>{isrunning ? 'stop' : 'start'}</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Stopwatch
