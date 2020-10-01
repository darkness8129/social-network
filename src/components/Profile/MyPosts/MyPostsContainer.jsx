import MyPosts from './MyPosts';
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
} from './../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        changePostText: (text) =>
            dispatch(changeNewPostTextActionCreator(text)),
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
