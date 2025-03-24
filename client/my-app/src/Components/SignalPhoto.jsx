import axois from 'axios'
import { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from "axios";
import UpdatePhoto from "./UpdatePhoto";

const SignalPhoto=(props)=>{

    const deletePhoto = async () => {
        await axios.delete(`http://localhost:1555/photo/${props.photo._id}`)
    }


return(<>
 <div className="card flex justify-content-center">
            
            <Card subTitle={props.photo.title} title={props.photo.title}  className="md:w-25rem">
                <UpdatePhoto id={props.photo._id} />
                <Button onClick={deletePhoto} label="Delete" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
            </Card>
        </div>
</>)
}
export default SignalPhoto;
