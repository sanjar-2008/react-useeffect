import { useState} from "react";
import '../css/Position.css'
const Position = () => {
    const [count,setCount] = useState(0)
    const [mouse,setMouse] = useState({x:0,y:0})
    const counter = () =>{
        setCount(count+1)
    }
    const mouseMove = (event) =>{
        setMouse({x:event.clientX,y:event.clientY})
    }
    return (
        <div>
            <div onMouseMove={()=>mouseMove(event)} className="position">
                <p>You clicked {count} times</p>
                <button onClick={counter}>Click me</button>
                <div className="position-block">
                    <p>X position: <span>{mouse.x}</span></p>
                    <p>Y position: <span>{mouse.y}</span>
                </p></div>
            </div>
        </div>
    );
};

export default Position;