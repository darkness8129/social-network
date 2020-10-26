import MyPosts from './MyPosts';
import { addPost } from './../../../redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { getPosts } from '../../../redux/selectors/myPostsSelectors';

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    };
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(MyPosts);

export default MyPostsContainer;
