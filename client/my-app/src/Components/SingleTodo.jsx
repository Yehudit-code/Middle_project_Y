import axios from 'axios'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { useEffect, useState } from 'react';

const SignalTodo = (props) => {
    const [complete, setComplete] = useState(false)

    const footer = (<>
        <Button label="update" icon="pi pi-pencil" />
        <Button label="delete" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        <div className="flex align-items-center">
            <Checkbox value={complete} onChange={(e) => { setComplete(e.checked) }} checked={complete} />
            <label htmlFor="ingredient1" className="ml-2">complete</label>
        </div>
    </>)
    const updatesetComplete = async () => {
        const Utodo = { id: props.todo._id, title: props.todo.title, tags: props.todo.tags, complete: complete }
        await axios.put("http://localhost:1555/todo", Utodo)
    }
    
    useEffect(() => {
        { props.todo.complete ? setComplete(true) : setComplete(false) }
    }, [])

    useEffect(() => {
        updatesetComplete()
    }, [complete])

    return (<>
        <div className="card flex justify-content-center">
            <Card title={props.todo.title} subTitle={props.todo.tags} footer={footer} className="md:w-25rem">
                <p className="m-0">
                    {props.todo.title}
                    {props.todo.tags}
                    {props.todo.complete}
                </p>
            </Card>
        </div>
    </>)
}
export default SignalTodo;