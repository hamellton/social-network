import React from "react";
import classes from "../../Profile/Post/Post.module.css";

let UsersElement = (props) => {
	return(
		<div className={classes.item}>
			<img src="https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg" alt="" />
			<div>
				<button>follow</button>
				{/*<span>{props.likes} : {props.likesCounter}</span>*/}
			</div>
		</div>
	)
}

export  default UsersElement