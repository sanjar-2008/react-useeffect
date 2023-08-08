import '../css/Color.css'
import {useEffect, useState} from "react";

const Color = () => {
    const [color,setColor] = useState('#e57373')
    const select = (event) =>{
        setColor(event.target.value)
    }
    useEffect(() => {
        document.body.style.background = color
    }, [color]);
    return (
        <div>
            <div className="color">
                <select onClick={()=>select(event)}>
                    <option value="#e57373">#e57373</option>
                    <option value="#40ecd2">#40ecd2</option>
                    <option value="#ece577">#ece577</option>
                </select>
                <p>{color}</p></div>
        </div>
    );
};

export default Color;