import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return(
        <div className={s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyDSfTyTv1OK4X17b3gjyfTBzA-Cgg0UcLp1nlrmR_X_eB-eGjGmumX9_HwsafglidzM&usqp=CAU" />
            {props.message}
            <div>❤ {props.likesCount}</div>
        </div>
    )
}

export default Post;