import axois from 'axios'
import { useEffect, useState } from 'react'
import SignalTodo from './SignalTodo';
import CreateTodo from './CreateTodo';

const Todo = () => {
    const [todos, setTodos] = useState([])

    const getAllToDos = async () => {
        const res = await axois.get('http://localhost:1555/todo')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setTodos(sortedItems)
    }

    // const searchInToDos = (event) => {
    //     setInputValue(event.target.value)
    //     const filterToDos = todos.filter(todo => { return todo._id.includes(inputValue) })
    //     setTodos(filterToDos)
    // }

    useEffect(() => {
        getAllToDos()
    }, [todos])

    return (<>
        <CreateTodo />
        {todos.map((e) => {
            return <SignalTodo todo={e} />
        })}
    </>)
}
export default Todo
