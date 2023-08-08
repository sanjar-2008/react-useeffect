import './css/app.css'
import {useState,useEffect} from "react";
import Click from "./pages/Click.jsx";
import Time from "./pages/Time.jsx";
import Changer from "./pages/Changer.jsx";
import Position from "./pages/Position.jsx";
import Color from "./pages/Color.jsx";
import Counter from "./pages/Counter.jsx";
function App() {
    const [block,setBlock] = useState('Click')
    const btn = (selectBlock) =>{
        setBlock(selectBlock)
    }
    useEffect(() => {
        if (block === 'Color' || block === 'Time' || block === 'Changer' || block === 'Position' || block === 'Counter') {
            document.body.style.background = 'white';
        }
    }, [block]);
    return(
        <>
            <h1>Home work(useState, useEffect)</h1>
            <div className='button-block'>
                <div className='button-item'>
                    <button onClick={()=>btn('Click')}  className='button-click'>Click</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Time')} className='button-click'>Time</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Changer')} className='button-click'>Changer</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Position')} className='button-click'>Position</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Color')} className='button-click'>Color select</button>
                </div>
                <div className='button-item'>
                    <button onClick={()=>btn('Counter')} className='button-click'>Counter</button>
                </div>
            </div>
            {block === 'Click' && <Click/>}
            {block === 'Time' && <Time/>}
            {block === 'Changer' && <Changer/>}
            {block === 'Position' && <Position/>}
            {block === 'Color' && <Color/>}
            {block === 'Counter' && <Counter/>}
        </>
    )
}

export default App
