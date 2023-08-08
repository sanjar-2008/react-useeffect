import { useState } from "react";
import '../css/Click.css'
const Click = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([{ task: count }]);

    const addTask = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);

        const newTask = { task: updatedCount };
        setItems(prevItems => [...prevItems, newTask]);
    };

    return (
        <div>
            <div className="click">
                <h4>Clicked nothing</h4>
                <div className="click-block">
                    <ul>
                        {items.map((item,index) => (
                            <li key={index}>Item {item.task}</li>
                        ))}
                    </ul>
                    <button onClick={addTask}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Click;
