import React from 'react'

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
