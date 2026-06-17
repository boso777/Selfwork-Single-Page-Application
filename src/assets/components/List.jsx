export default function List({names}){
    return (
        <ul className="custom_list">
            {names.map((single_name)=>{
                return(
                    <li>{single_name}</li>
                )
            })}
        </ul>
    )
}