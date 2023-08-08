import {useState, useEffect} from "react";
import '../css/Time.css'
const Time = () => {
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
         setInterval(()=>{
            setTime(new Date())
        })
    },[])
    return (
        <div>
            <div className="time">
                <h3>The time is</h3>
                <div className="time-block">
                    <span>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Time;