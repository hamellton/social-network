import {
    addPostActionCreator, deletePostElementActionCreator,
    updateNewPostTextActionCreator
} from '../../../Redux/profileReducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        deletePostElement: () => {
            let action = deletePostElementActionCreator()
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action)
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer