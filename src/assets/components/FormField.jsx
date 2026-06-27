export default function FormName({fieldName , fieldFunct}){

    
    return(
        <>
            <label>{fieldName}</label>
            <input type="text" onChange={(e) => fieldFunct(e.target.value)}/>
        </>
    )
}