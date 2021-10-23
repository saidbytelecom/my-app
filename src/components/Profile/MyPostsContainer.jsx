import { connect } from "react-redux";
import MyPosts from "./MyPosts/MyPosts";
import {addPostAC} from "./../../redux/profile-reducer";

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;