import React, {useState} from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {


    const [post, setPost] = useState({
        title: '',
        body: ''
    })


    const createPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            ...post
        }
        create(newPost)
        setPost({
            title: '',
            body: ''
        })
    }

    return (
        <form className="createForm">
            <MyInput
                type="text"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                value={post.title}
                placeholder="Post Title"
            />
            <MyInput
                type="text"
                placeholder="Post Body"
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                value={post.body}
            />
            <MyButton onClick={createPost}>Create Post</MyButton>
        </form>
    )
}

export default PostForm