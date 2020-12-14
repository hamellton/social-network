import {
    addPostActionCreator, deletePostElementActionCreator,
    updateNewPostTextActionCreator
} from '../../../Redux/profileReducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     let onPostChanged = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action)
//                     }
//                     let deletePostElement = () => {
//                         let action = deltePostElementActionCreator()
//                         store.dispatch(action)
//                     }
//
//                     return(
//                         <MyPosts updateNewPostText={onPostChanged}
//                                  deletePostElement={deletePostElement}
//                                  addPost={addPost}
//                                  posts={state.profilePage.posts}
//                                  newPostText={state.profilePage.newPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

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