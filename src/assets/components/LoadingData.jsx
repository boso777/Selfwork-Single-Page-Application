import { useState , useEffect } from "react"

export default function LoadingData({url}){
    
    const [data , setData] = useState([]);
    const [trigger , setTrigger] = useState(false);
    
    
    const getData = async (link) => {
        const promise = await fetch(link);
        const json = await promise.json();
        setData(json);
    }
    
    useEffect(()=>{
        if(trigger){
            getData(url);
        }else{
            emptyUl();
        }
    }, [trigger])
    
    const btnShow = ()=>{
        if(trigger!=true){
            setTrigger(true)
        }else{
            setTrigger(false)
        }
    }
    
    const emptyUl = ()=>{
        setData([]);
    }
        
        
        return(
            <>
            <button className="custom_btn1" onClick={btnShow}>{trigger ? "Nascondi Utenti" : "Mostra Utenti"}</button>
            <ul>
            {data.map((user)=>{
                return (

                <li key={user.id} className="custom_list">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                </li>
                
                )
            })}
            </ul>
            
            </>
        )
    }
    