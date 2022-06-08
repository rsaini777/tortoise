import React,{useEffect} from 'react'

const Timer = ({ alpha,timeLeft,setTimeLeft,setBest,best }) => {
    // initialize timeLeft with the seconds prop
  
    useEffect(() => {
     
      if (alpha=="Success"){
          if(best>`${("0" + Math.floor((timeLeft / 1000) % 60)).slice(-2)}`){
            localStorage.setItem("time",`${("0" + Math.floor((timeLeft / 1000) % 60)).slice(-2)}:${("0" + ((timeLeft / 10) % 100)).slice(-2)}`)
            setBest(`${("0" + Math.floor((timeLeft / 1000) % 60)).slice(-2)}:${("0" + ((timeLeft / 10) % 100)).slice(-2)}`)
            
          }
        return;
      } 
  
      // save intervalId to clear the interval when the
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime + 10);
      }, 10);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
  
      // when we update it
    }, [timeLeft]);
  
    return (
      <div>
         <span className='timetitle'>Time:</span>
         <span className='timetitle'>{("0" + Math.floor((timeLeft / 1000) % 60)).slice(-2)}:</span>
        <span className='timetitle'>{("0" + ((timeLeft / 10) % 100)).slice(-2)}</span>
      </div>
    );
  };
export default Timer

