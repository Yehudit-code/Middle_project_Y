import axios from "axios";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import UpdatePost from "./UpdatePost";


const SignalPost = (props) => {

    const deletePost = async () => {
        await axios.delete(`http://localhost:1555/post/${props.post._id}`)
        props.getAllPosts()
    }

    const footer = (<>
        <div className="card flex justify-content-center"></div>
    </>)

    // const updatePost = async () => {
    //     await axios.put('http://localhost:1555/post', { title: props.post.title, body: props.post.body })
    // }

    return (<>
        <div className="card flex justify-content-center">
            <Card title={props.post.title} subTitle={props.post.body} footer={footer} className="md:w-25rem">
                <UpdatePost id={props.post._id} getAllPosts={props.getAllPosts}/>
                <Button onClick={deletePost} label="Delete" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
                
            </Card>
        </div>
    </>)
}
export default SignalPost;

