import React from 'react'
import {NavLink} from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Navbar.module.css'
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";


const NavbarContainer = (props) => {
    // let sideBar = props.state.sideBar.sidebar.map(el => (<Sidebar name={el.name} />))
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().sideBar.sidebar

                return(
                    <Navbar state={state}/>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default NavbarContainer