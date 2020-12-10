import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import dialogsReducer from "./dialogsReducer";
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})

let store = createStore(reducers)

export default store