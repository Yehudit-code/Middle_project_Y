import axois from 'axios'
import { useEffect, useState } from 'react'
import { AutoComplete } from "primereact/autocomplete";
import { Checkbox } from "primereact/checkbox";
import SignalTodo from './SignalTodo';
import { InputText } from 'primereact/inputtext';

const Todo = ({ hello }) => {
    const [todos, setTodos] = useState([])
    // const [checked, setChecked] = useState(false);
    // const [value, setValue] = useState('');
    // const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState();


    const getAllToDos = async () => {
        const res = await axois.get('http://localhost:1555/todo')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setTodos(sortedItems)
    }

    const searchInToDos = (event) => {
        setInputValue(event.target.value)
        const filterToDos = todos.filter(todo => { return todo._id.includes(inputValue) })
        // if (filterToDos)
        setTodos(filterToDos)
        // else
        //     setTodos(todos)

    }

    useEffect(() => {
        getAllToDos()
    }, [todos])

    return (<>
        <div className="card flex justify-content-left">
            <InputText value={inputValue} onKeyDown={searchInToDos} />
        </div>
        {todos.map((e) => {
            return <SignalTodo todo={e} />
        })}
    </>)
}
export default Todo
