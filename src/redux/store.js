import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import { reducer as formReducer } from 'redux-form'
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    form: formReducer
})

let store = createStore(reducers);

export default store;