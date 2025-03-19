import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

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
            label: 'User',
            icon: 'pi pi-home',
            command: () => {
                navigate('./user')
            }
        },
        {
            label: 'Photo',
            icon: 'pi pi-star',
            command: () => {
                navigate('./photo')
            }
        },
        {
            label: 'Todo',
            icon: 'pi pi-pencil',
            command: () => {
                navigate('./todo')
            }
        },
        {
            label: 'Post',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('./post')
            }
        }]
    return (<>
        <Menubar model={items} />
    </>)
}
export default MenuBar