import React from 'react'
<<<<<<< HEAD
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
=======

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h2 className="post__title">{props.id}. {props.title}</h2>
                <p className="post__description">
                    {props.desc}
                </p>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostItem
>>>>>>> 1a023099d0e010d3b4226c7e528766bf0a48e597
