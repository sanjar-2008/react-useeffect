import '../css/Counter.css'
import {useEffect, useState} from "react";
const Counter = () => {
    const [count,setCount] = useState(JSON.parse(localStorage.getItem('count')||[0]))
    useEffect(() => {
        if (count < 0){
            setCount(0)
        }
        localStorage.setItem('count', JSON.stringify(count))
    }, [count]);
    const counter = (change) =>{
        setCount((item)=>item+change)
    }
    const reset = () =>{
        setCount(0)
    }
    return (
        <div>
            <div className={'counter'}>
                <h3>{count}</h3>
                <div className={'counter-btn'}>
                    <button onClick={()=>counter(-1)}>-1</button>
                    <button onClick={()=>counter(1)}>+1</button>
                    <button onClick={reset}>Reset</button>
                </div>
                <p>Count from Local Storage</p>
            </div>
        </div>
    );
};

export default Counter;