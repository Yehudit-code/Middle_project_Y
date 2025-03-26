import axois from 'axios'
import { useEffect, useState } from "react"
import CreatePost from './CreatePost'
import SignalPost from './SignalPost'

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
    <CreatePost getAllPosts={getAllPosts}/>
        {posts.map((e) => {
            return <SignalPost post={e} getAllPosts={getAllPosts}/>
        })}
    </>)
}
export default Post
