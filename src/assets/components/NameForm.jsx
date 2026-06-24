export default function NameForm({setName}){
    return (
        <>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
        </>
    )
}