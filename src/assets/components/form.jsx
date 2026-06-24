import { useState } from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";

export default function Form(){

const [name, setName] = useState("");   
const [mail, setMail] = useState("");
const [submitted, setSubmitted] = useState(0)

let card = null;

if(submitted === 1 && name !== "" && mail !== ""){
    card = <div className="custom-card">
        <p>{name}</p>
        <p>{mail}</p>
    </div>
    
}

    return(
        <>
        <form onSubmit={(e) => {e.preventDefault() ; setSubmitted(1);}} className="custom-bg custom-form">   
            <Form.NameForm setName={setName}></Form.NameForm>
            <Form.EmailForm setMail={setMail}></Form.EmailForm>
            
            <button type="submit" className="">Conferma!</button>
        </form>

        {card}
    
        </>
    )
}
Form.NameForm = NameForm;
Form.EmailForm = EmailForm;
