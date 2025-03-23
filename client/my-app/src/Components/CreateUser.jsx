import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import React from "react";
import axios from "axios";
//import InputText from '.primereact/InputText';

const CreateUser = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    const SaveTodo = async (e) => {
        await axios.post('http://localhost:1555/user', { name, username,email,address,phone })
    }
    return (<>
        <div className="card flex justify-content-end">
            <Button label="Add new user" icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => { if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="title" className="text-primary-50 font-semibold">
                                name
                            </label>
                            <InputText onChange={(e) => { setName(e.target.value) }} className="bg-white-alpha-20 border-none p-3 text-primary-50" style={{ required: true }} />

                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="tags" className="text-primary-50 font-semibold">
                                user name
                            </label>
                            <InputText onChange={(e) => { setUsername(e.target.value) }} className="bg-white-alpha-20 border-none p-3 text-primary-50" style={{ required: true }} />
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="tags" className="text-primary-50 font-semibold">
                               email
                            </label>
                            <InputText onChange={(e) => { setEmail(e.target.value) }} className="bg-white-alpha-20 border-none p-3 text-primary-50" style={{ required: true }} />
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="tags" className="text-primary-50 font-semibold">
                                address
                            </label>
                            <InputText onChange={(e) => { setAddress(e.target.value) }} className="bg-white-alpha-20 border-none p-3 text-primary-50" style={{ required: true }} />
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="tags" className="text-primary-50 font-semibold">
                                phone
                            </label>
                            <InputText onChange={(e) => { setPhone(e.target.value) }} className="bg-white-alpha-20 border-none p-3 text-primary-50" style={{ required: true }} />
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Save" icon="pi pi-check" onClick={(e) => { SaveTodo(e); hide(e) }} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-20"></Button>
                            <Button label="Cancel" icon="pi pi-times" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
        {/* <Todo dialogAdd={dialogAdd} /> */}
    </>)
}
export default CreateUser