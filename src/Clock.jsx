import {  useEffect, useState } from "react";

export default function Clock (){

    const [hours,setHours] = useState();
    const [minutes,setMinutes] = useState(); 
    const [seconds,setSeconds] = useState();


    useEffect(() => {
         setInterval(() => {    
            const time = new Date();
            setHours(time.getHours()<10 ? `0${time.getHours()}` : time.getHours());
            setMinutes(time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes());  
            setSeconds(time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds());
        }, 1000);   
        // return () => clearInterval(interval);
    }, []);


    
    

    return(
        <div className="flex gap-4 m-4">
            <span className="bg-emerald-700 p-4 text-white shadow-md">{hours}</span>
            <span className=" p-4 text-xl">:</span>  
            <span className="bg-emerald-700 p-4 text-white shadow-md">{minutes}</span>
            <span className=" p-4 text-xl ">:</span>
            <span className="bg-emerald-700 p-4 text-white shadow-md">{seconds}</span>
        </div>
    )
}