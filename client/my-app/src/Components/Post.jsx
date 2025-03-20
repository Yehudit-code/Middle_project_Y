import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react"

const Post = () => {
    const [posts, setPosts] = useState(["אין כלום!"])

    const getAllPosts = async () => {
        const res = await axios.get("http://localhost:1555/post")
        const sorted=res.data.sort((a,b)=>a.id-b.id)
        setPosts(sorted)
    }
    useEffect(() => {
        getAllPosts()
    }, [])
    return (<>
        <h1>Post📫🚩🏤🚩</h1>
        {posts.map((e) => {
            return <h3>{e.title}</h3>
        })}
    </>)
}

export default Post;