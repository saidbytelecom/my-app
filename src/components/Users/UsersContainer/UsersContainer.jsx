import { connect } from "react-redux";
import Users from "../Users";
import {setUsers} from "./../../../redux/users-reducer"

let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const UsersContainer = connect(mapStateToProps, {setUsers})(Users);

export default UsersContainer;