import { Checkbox } from "primereact/checkbox"
import axois from 'axios'
import { useEffect, useRef, useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';



const SignalTodo = (props) => {

    const [checked, setChecked] = useState(false);

    const footer = (
        <>

            <div className="card flex justify-content-center">
                <p className="m-0">complete</p>
                <Checkbox value={checked} onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
            </div>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );
    const updateComplete = async () => {
        const newToDo = {
            id: props.todo._id,
            title: props.todo.title,
            tags: props.todo.tags,
            complete: checked
        }
        const res = await axois.put('http://localhost:1555/todo',  newToDo )
    }
    useEffect(() => {
        { props.todo.complete ? setChecked(true) : setChecked(false) }

    }, [])
    useEffect(() => {
         updateComplete()
    }, [checked])
    return (<>
        <div className="card flex justify-content-center">
            <Card title={props.todo.tags} subTitle={props.todo.title} footer={footer} className="md:w-25rem">
                <p className="m-0">
                </p>
            </Card>
        </div>
    </>)
}
export default SignalTodo