import axois from 'axios'
import { useEffect, useState } from "react"

const Photo = ()=>{
    const [photos, setPhotos] = useState([])

    const getAllPhotos = async () => {
        const res = await axois.get('http://localhost:1555/post')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setPhotos(sortedItems)
    }
    useEffect(() => {
        getAllPhotos()
    }, [])





    return (<>
        {photos.map((e) => {
            return <p> {e._id}</p>
        })}
    </>)
}
export default Photo