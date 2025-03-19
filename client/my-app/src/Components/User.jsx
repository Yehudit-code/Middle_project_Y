import axios from "axios"
import { useEffect, useState } from "react"

const User = ()=>{
    const [users,setUsers]= useState([])
    const getAllUsers = async ()=>{
        const res = await axios.get('http://localhost:1555/user')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setUsers(sortedItems)
    }
    useEffect(()=>{
        getAllUsers()
    })
    return(<>
        {users.map((e)=>{
            return <p>{e._id}</p>
        })}
    </>)
}
export default User