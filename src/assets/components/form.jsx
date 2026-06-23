import { useState } from "react";

export default function Form(){

const [name, setName] = useState("");   
const [mail, setMail] = useState("");
const [submitted, setSubmitted] = useState(0)

let card = null;

function submit(){
setSubmitted(1);
}

if(submitted === 1){
    card = <div className="custom-card">
        <p>{name}</p>
        <p>{mail}</p>
    </div>
    
}

    return(
        <>
        <form onSubmit={(e) => {e.preventDefault() ; submit()}} className="custom-bg custom-form">   
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="mail">Email</label>
            <input type="text" id="mail" onChange={(e) => setMail(e.target.value)}/>

            <button type="submit" className="">Conferma!</button>
        </form>

        {card}
    
        </>
    )
}