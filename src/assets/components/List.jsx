export default function List({names}){
    return (
        <ul>
            {names.map((single_name)=>{
                return(
                    <li>{single_name}</li>
                )
            })}
        </ul>
    )
}