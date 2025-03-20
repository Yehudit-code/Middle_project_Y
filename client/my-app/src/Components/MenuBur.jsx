import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";
const MenuBar = () => {

    const navigate = useNavigate()
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                navigate('./')
            }
        },
        {
            label: 'Users',
            icon: 'pi pi-user',
            command: () => {
                navigate('./user')
            }
        },
        {
            label: 'Posts',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('./post')
            }
        },{
            label: 'Todo',
            icon: 'pi pi-table',
            command: () => {
                navigate('./todo')
            }
        },{
            label: 'Photos',
            icon: 'pi pi-image',
            command: () => {
                navigate('./photo')
            }
        },]
    return (<>
        <Menubar model={items} />


    </>)
}

export default MenuBar;