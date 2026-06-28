import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const getData = async () => {
        const dataFetched = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const dataJson = await dataFetched.json();
        return dataJson;
    };

    useEffect(() => {
        getData().then(dati => setPost(dati));
    }, []);

    if (!post) {
        return <p>Caricamento in corso...</p>;
    }

    return (
        <>
            <h1>Post Id: {id}</h1>
            <h4>Titolo: {post.title}</h4>
            <p>{post.body}</p>
        </>
    );
}