import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function Posts() {

    const [data, setData] = useState([]);

    const getData = async () => {
        const dataFetched = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataJson = await dataFetched.json()
        return dataJson;
    }

    useEffect(() => {
        getData().then(dati => setData(dati));
    }, [])

    return (
        <>
            <ul>
                {data.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <NavLink to={`./${post.id}`} > See more! </NavLink>
                        </div>
                    )

                })}
            </ul >
        </>
    );
}