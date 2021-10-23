const SET_USERS = "SET_USERS";

let initState = {
    users: [
        {id:1, followed: false, name:"Said", status:"i am React Developer" },
        {id:2, followed: false, name:"Amir", status:"i am Front-end Developer" },
        {id:3, followed: false, name:"Asiya", status:"i am back end Developer" },
    ]
}

const usersReducer = (state = initState, action) => {
    switch(action.type) {


        default: 
             return state
    }
}

export const setUsers = (users) => ({type:SET_USERS, users})

export default usersReducer;