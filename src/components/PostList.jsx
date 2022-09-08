import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts}) => {
    return (
        <>
            <h1 style={{ color: 'red', fontSize: '50px', marginTop: '20px' }}>Posts List</h1>
            {posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} desc={post.desc} />)}
        </>
    )
}

export default PostList