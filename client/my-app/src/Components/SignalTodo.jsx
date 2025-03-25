import { Checkbox } from "primereact/checkbox"
import axois from 'axios'
import { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from "axios";
import UpdateTodo from "./UpdateTodo";

const SignalTodo = (props) => {
    const [checked, setChecked] = useState(false);

    const deleteToDo = async () => {
        await axios.delete(`http://localhost:1555/todo/${props.todo._id}`)
    }

    const footer = (<>
        <div className="card flex justify-content-center">
            <p className="m-0">complete</p>
            <Checkbox value={checked} onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    </>)

    const updateComplete = async () => {
        const newToDo = {
            id: props.todo._id,
            title: props.todo.title,
            tags: props.todo.tags,
            complete: checked
        }
        await axois.put('http://localhost:1555/todo', newToDo)
    }

    useEffect(() => {
        { props.todo.complete ? setChecked(true) : setChecked(false) }

    }, [])

    useEffect(() => {
        updateComplete()
    }, [checked])

    return (<>
        <div className="card flex justify-content-center">
            <Card subTitle={props.todo.tags} title={props.todo.title} footer={footer} className="md:w-25rem">
                <UpdateTodo id={props.todo._id} />
                <Button onClick={deleteToDo} label="Delete" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
            </Card>
        </div>
    </>)
}
export default SignalTodo