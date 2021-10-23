const ADD_POST = "ADD_POST";

const initState = {
    posts: [
        {id:1, message:'hello, world', likesCount: 69},
        {id:2, message:'this is test', likesCount: 99},
        {id:3, message:'react developer', likesCount: 39},
    ]
}

const profileReducer = (state=initState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount:0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({type:ADD_POST, newPostText})

export default profileReducer;