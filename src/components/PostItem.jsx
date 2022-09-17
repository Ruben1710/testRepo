import React from 'react'
import MyButton from './UI/button/MyButton'

export const PostItem = ({post, number, remove}) => {
  return (
    <div className='post'>
        <div className="post__content">
            <h2 className="post__title">
                {number}. {post.title}
            </h2>
            <p className="post__body">
                {post.body}
            </p>
        </div>
        <div className="post_btns">
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
        </div>
    </div>
  )
}
