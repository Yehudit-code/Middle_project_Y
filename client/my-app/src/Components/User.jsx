import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react"

const User = () => {

    const [users, setUsers] = useState(["אין כלום!"])

    const getAllPosts = async () => {
        const res = await axios.get("http://localhost:1555/user")
        const sorted=res.data.sort((a,b)=>a.id-b.id)
        setUsers(sorted)
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (<>
        <h1>users👩👧👩‍🦰👱‍♂️👸👨‍🦰👨‍🦱👩‍🦲👨‍🦳</h1>
       
        {users.map((e) => {
            return <h3>{e.name}</h3>
        })}
    </>)
}

export default User;