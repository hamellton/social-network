import React from 'react'
import classes from './Navbar.module.css'

console.log(classes)
// let c1 = "item"
// let c2 = "active"

// // "item active"
// let classesNew = `${classes.item} ${classes.active}`

 const Navbar = () => {
     return(
        <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}><a>Profile</a></div>
        <div className={`${classes.item} ${classes.active}`}><a>Messages</a></div>
        <div className={`${classes.item} ${classes.active}`}><a>News</a></div>
        <div className={`${classes.item} ${classes.active}`}><a>Music</a></div>
    </nav>
 )
 }

 export default Navbar