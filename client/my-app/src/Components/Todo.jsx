
import axois from 'axios'
import { useEffect, useState } from 'react'
import { Checkbox } from "primereact/checkbox";
import SignalTodo from './SignalTodo';
const Todo = ({hello}) => {
    const [todos, setTodos] = useState([])
    const [checked, setChecked] = useState(false);

    const getAllToDos = async () => {
        const res = await axois.get('http://localhost:1555/todo')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setTodos(sortedItems)
    }
    useEffect(() => {
        getAllToDos()
    }, [])
    return (<>
        {todos.map((e) => {
            return <SignalTodo todo={e} />
        })}
        {/* <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div> */}
    </>)
}
export default Todo
