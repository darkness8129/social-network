import MyPosts from './MyPosts';
import { addPost, changeNewPostText } from './../../../redux/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    };
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    changeNewPostText,
})(MyPosts);

export default MyPostsContainer;
