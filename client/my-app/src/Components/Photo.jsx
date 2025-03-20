import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react"

const Photo = () => {
    const [photos, setPhotos] = useState(["אין כלום!"])

    const getAllPosts = async () => {
        const res = await axios.get("http://localhost:1555/photo")
        const sorted=res.data.sort((a,b)=>a.id-b.id)
        setPhotos(sorted)
    }
    useEffect(() => {
        getAllPosts()
    }, [])

    return (<>
        <h1>Photo📷📸</h1>
        {photos.map((e) => {
            return <img src={e.imageUrl} />
        })}
    </>)
}

export default Photo;
