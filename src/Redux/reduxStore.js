import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store