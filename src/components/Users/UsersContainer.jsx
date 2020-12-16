// import React from "react";
import UsersPage from "./UsersPage";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../Redux/usersReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return{
		users: state.users.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return{
		setUser: (userId) => {
			let action = setUsersActionCreator(userId)
			dispatch(action)
		},
		follow: (userId) => {
			let action = followActionCreator(userId)
			dispatch(action)
		},
		unfollow: (users) => {
			let action = unFollowActionCreator(users)
			dispatch(action)
		}
	}
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export  default UsersContainer