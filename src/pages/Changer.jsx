import '../css/Changer.css'
import {useState} from "react";

const Changer = () => {
    const [number,setNumber] = useState(null)
    const [count,setCount] = useState(0)
    const luckyNumber = () => {
        setNumber(Math.floor(Math.random() * 100))
    }
    const counter = () => {
        setCount(count+1)
    }
    return (
        <div>
            <div className="changer">
                <p onClick={counter}>Welcome Cool {'Guy' + 'y'.repeat(count)}</p>
                <p>Your lucky number is {number}</p>
                <p>Name has changed {count} times</p>
                <button onClick={counter}>Change name</button>
                <button onClick={luckyNumber}>Get your lucky number</button>
            </div>
        </div>
    );
};

export default Changer;