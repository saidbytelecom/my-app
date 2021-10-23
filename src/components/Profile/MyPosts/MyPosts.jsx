import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLength30 = maxLengthCreator(30)

let AddMyPostsForm = (props) => { 
    return <form onSubmit={props.handleSubmit}>
        <div><Field component="textarea" name="newPostText" validate={[ requiredField, maxLength30]} /></div>
        <div><button>Send</button></div>
    </form>
}
const AddMyPostsReduxForm = reduxForm({form: "ProfileAddMyPostsForm"})(AddMyPostsForm)

const MyPosts = (props) => {
    
    let PostElement = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)


    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return(
            <div>
                <AddMyPostsReduxForm onSubmit={onAddPost} />
                <div>
                    {PostElement}
                </div>
            </div>
    )
}



export default MyPosts;