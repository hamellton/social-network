import profileReducer from "./profileReducer"
import dialogsReduscer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profileReducer,
    dialogsReduscer,
    sidebarReducer
})

let store = createStore(reducers)

export default store