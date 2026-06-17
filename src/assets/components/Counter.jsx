import { useState } from "react";
import List from './List';

export default function Counter(){

    const names = ['Luca' , 'Mario' , 'Antonio' , 'Carlo'];
    const [count, setCount] = useState(0);
    
    const increment = ()=>{
        setCount((prev)=>prev+1)
    };
    const decrement = ()=>{
       setCount((prev)=>prev-1)
    };

    return(
        <>
        <div className="container_global">
        <div className="container_counter">
            <h5>Il numero da te selezionato è: </h5>
            <p>{count}</p>
            <div className="container_btn">
            <button onClick={decrement} className="custom_btn1">-</button>   
            <button onClick={increment} className="custom_btn2">+</button> 
            </div>
        </div>  
        <List names={names}></List>
        </div>
        </>
    )
}