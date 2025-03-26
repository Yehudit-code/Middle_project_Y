import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react"
import { Toolbar } from "primereact/toolbar";
import CreatePhoto from "./CreatePhoto";
import SignalPhoto from "./SignalPhoto";

const Photo = () => {
    const [photos, setPhotos] = useState([])

    const getAllPhotos = async () => {  
        const res = await axios.get("http://localhost:1555/photo")
        const sorted=res.data.sort((a,b)=>a.id-b.id)
        setPhotos(sorted)
    }
    useEffect(() => {
        getAllPhotos()
    }, [])
    
    return (<>
     <div className="card">
                <Toolbar start={<CreatePhoto getAllPhotos={getAllPhotos}/>}  />
            </div>
        {photos.map((e) => {
            return <SignalPhoto photo ={e} getAllPhotos={getAllPhotos}/>
        })}
    </>)
}

export default Photo;
