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
        {posts.map((e) => {
            return <p> {e._id}</p>
        })}
    </>)
}
export default Post