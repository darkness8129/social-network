import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/forms/FormControl';
import { maxLength, required } from '../../../utils/validators/validators';

const maxLength30 = maxLength(30);

const NewPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder='Your post...'
                className={styles.postInput}
                component={Textarea}
                name='newPostBody'
                validate={[required, maxLength30]}
            />
            <button>Add post</button>
        </form>
    );
};

const ReduxNewPostForm = reduxForm({
    form: 'newPostForm',
})(NewPostForm);

const MyPosts = ({ posts, addPost }) => {
    console.log('RENDER');
    console.log(posts, addPost);
    const onAddPost = (values) => {
        addPost(values.newPostBody);
    };

    return (
        <div>
            <h2 className='title'>My posts</h2>
            <ReduxNewPostForm onSubmit={onAddPost} />
            <div>
                {posts.map((post) => {
                    return <Post postText={post.postText} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default MyPosts;
