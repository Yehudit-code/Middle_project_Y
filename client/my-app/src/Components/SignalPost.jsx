import axios from "axios";
import { Button } from "primereact/button";
import { Card } from "primereact/card";


const SignalPost = (props) => {

    const deletePost= async ()=>{
        console.log(props.post._id)
        await axios.delete(`http://localhost:1555/post/${props.post._id}`)
    }

    const footer = (<>
        <div className="card flex justify-content-center"></div>
    </>)

    const updatePost=async ()=>{
        await axios.put('http://localhost:1555/post', {title:props.post.title, body:props.post.body})
    }

    return (<>
       <div className="card flex justify-content-center">
            <Card title={props.post.title} subTitle={props.post.body} footer={footer} className="md:w-25rem">
                {/* <UpdatePost id={props.post._id} /> */}
                <Button onClick={deletePost} label="Delete" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
            </Card>
        </div>
        </>)
}
export default SignalPost;

