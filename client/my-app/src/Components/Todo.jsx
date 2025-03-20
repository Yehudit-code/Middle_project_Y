
import axios from 'axios'
import { useEffect, useState } from "react"
import SignalTodo from "./SingleTodo";

const Todo = () => {
    const [todos, setTodos] = useState([])

    const getAllTodos = async () => {
        const res = await axios.get("http://localhost:1555/todo")
        const sorted=res.data.sort((a,b)=>a.id-b.id)
        setTodos(sorted)
    }
    useEffect(() => {
        getAllTodos()
    }, [])

    return (<>
        <h1>Todoes🛠🔑⚒🎨🥽🕶🦺🎢🎁</h1>
        {todos.map((e) => {
            return <SignalTodo todo={e}/>
        })}
    </>)
}

export default Todo;