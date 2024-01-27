import { useState, useEffect } from "react";

export default function Progressbar ({timer}){

    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(()=>{
      const Interval = setInterval(() => {
        console.log('Interval set')
        setRemainingTime((prevTime)=> prevTime - 10)
      }, 10);
  
      return ()=>{
        console.log('Interval Removed')
        clearInterval(Interval)
      }
    },[])

    return(
        <>
            <p>Clearing in 5 seconds</p>
            <progress id = 'myProgressBar' value={remainingTime} max={timer}/>
        </>
    )
}