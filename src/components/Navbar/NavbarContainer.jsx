import React from 'react'
import Navbar from "./Navbar";
import {connect} from "react-redux";


// const NavbarContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().sideBar.sidebar
//
//                 return(
//                     <Navbar state={state}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        state: state.sideBar.sidebar
    }
}

let mapDisaptchToProps = (dispatch) => {}

let NavbarContainer = connect(mapStateToProps, mapDisaptchToProps)(Navbar)

export default NavbarContainer