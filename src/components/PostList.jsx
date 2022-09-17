import React from 'react'
import { PostItem } from './PostItem'

const PostList = ({ posts, title, remove }) => {
    return (
        <div className='postList'>
            <h1 style={{ textAlign: 'center', margin: "20px 0", color: 'red', fontSize: '50px' }}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem post={post} remove={remove} number={index + 1} key={post.id} />
            )}
        </div>
    )
}

export default PostList
