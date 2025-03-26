import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"
import CreateUser from "./CreateUser";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Button } from "primereact/button";
import UpdateUser from "./UpdateUser";

const User = () => {
    const [users, setUsers] = useState([])
   
    const getAllUsers = async () => {
        const res = await axios.get('http://localhost:1555/user')
        const sortedItems = res.data.sort((a, b) => a.id - b.id);
        setUsers(sortedItems)
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    const deleteUser = async (rowData) => {
        console.log(rowData)
      
      console.log(rowData._id)
        const res = await axios.delete(`http://localhost:1555/user/${rowData._id}`)
        setUsers(res.data)
    }

    const updateButton = (rowData) => {
        return (
            <UpdateUser user={rowData}  getAllUsers={getAllUsers}/>

        )
    }


    const deleteButton = (rowData) => {
      
        return (
            <div className="flex align-items-center gap-2">
                <Button icon="pi pi-trash" onClick={()=>deleteUser(rowData)} className="p-button-rounded" /> </div>
        )
    }



    return (<>
        <CreateUser getAllUsers={getAllUsers}/>
        {/* 
        <div className="card p-fluid">
            <DataTable value={users} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="username" header="User name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                {/* <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column> */}
        {/* <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column> */}
        {/* //</></div> */}

        <div className="card">
            <DataTable value={users} tableStyle={{ minWidth: '50rem' }}>
            <Column field="_id" header="Id"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="username" header="user Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="address" header="Address"></Column>
                <Column field="phone" header="Phone"></Column>
               <Column header="DELETE" body={deleteButton}></Column> 
                <Column header="UPDATE" body={updateButton}></Column>

            </DataTable>
        </div>



    </>)
}
export default User
