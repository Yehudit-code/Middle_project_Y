import axois from 'axios'
import { useEffect, useState } from 'react'
import SignalTodo from './SignalTodo';
import CreateTodo from './CreateTodo';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Toolbar } from 'primereact/toolbar';


const Todo = () => {
    const [todos, setTodos] = useState([])

    
    const getAllToDos = async () => {
        const res = await axois.get('http://localhost:1555/todo')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setTodos(sortedItems)
    }

    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search" />
        </IconField>
    )

    // const searchInToDos = (event) => {
    //     setInputValue(event.target.value)
    //     const filterToDos = todos.filter(todo => { return todo._id.includes(inputValue) })
    //     setTodos(filterToDos)
    // }

    useEffect(() => {
        getAllToDos()
    }, [todos])

    return (<>
        <div className="card">
            <Toolbar start={<CreateTodo />} center={centerContent} />
        </div>
        {todos.map((e) => {
            return <SignalTodo todo={e} />
        })}
    </>)
}
export default Todo
