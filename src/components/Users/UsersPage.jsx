import React from "react";
import UserElement from "./user/UserElement";

let UsersPage = (props) => {
	let userElement = props.users.map(el => <UserElement
		fullname={props.users.fullName}
		status={props.users.status}
		city={props.users.location.city}
		country={props.users.location.country}
		followed={props.users.followed}
	/>)

	return(
		<div>{userElement}</div>
	)
}

export  default UsersPage