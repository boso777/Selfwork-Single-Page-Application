export default function EmailForm({setMail}){
    return (
        <>
        <label htmlFor="mail">Email</label>
        <input type="text" id="mail" onChange={(e) => setMail(e.target.value)}/>
        </>
    )
}