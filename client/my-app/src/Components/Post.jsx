import axois from 'axios'
import { useEffect, useState } from "react"

const Post = ()=>{
    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
        const res = await axois.get('http://localhost:1555/post')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setPosts(sortedItems)
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
export default Post
