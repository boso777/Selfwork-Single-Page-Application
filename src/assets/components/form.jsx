import { useState } from "react";
import FormField from "./FormField";

export default function Form({children , fieldValue1 , fieldValue2}){

const [submitted, setSubmitted] = useState(0)

let card = null;

function submit(){
setSubmitted(1);
}

if(submitted === 1){
    card = <div className="custom-card">
        <p>{fieldValue1}</p>
        <p>{fieldValue2}</p>
    </div>
    
}

    return(
        <>
        <form onSubmit={(e) => {e.preventDefault() ; submit()}} className="custom-bg custom-form">   

            {children}
            
            <button type="submit" className="">Conferma!</button>
        </form>

        {card}
    
        </>
    )
}

Form.FormField = FormField;