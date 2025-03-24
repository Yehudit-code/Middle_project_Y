import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"
import CreateUser from "./CreateUser";
import SignalUser from "./SignalUser";

const User = () => {
    const [users, setUsers] = useState([])
    const getAllUsers = async () => {
        const res = await axios.get('http://localhost:1555/user')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setUsers(sortedItems)
    }
    useEffect(() => {
        getAllUsers()
    })
    return (<>
        <CreateUser />
        {users.map((e) => {
            return <SignalUser user={e} />
        })}
    </>)
}
export default User
