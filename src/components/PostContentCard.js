import React from 'react'
import "./PostContentCard.css"
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

function PostContentCard({post_data}) {
    return (
        <div className="postcontentcard">
            <div className="postcontentcard__top">
                <Avatar src={post_data? post_data.photoURL : ""} alt="user logo"/>
                <span className="postcontentcard__topSpan">
                    <h3>{post_data? post_data.name : "User"}</h3>
                    <p>Software developing enthusiast 🚀</p>
                    <p>{post_data? post_data.timestamp : ""}</p>
                </span>

            </div>
            <div className="postcontentcard__body new-line">
    <p>{post_data?.post}</p>
            </div>
            <hr></hr>
            <div className="postcontentcard__footer">
                <div className="postcontentcard__footerIcon">
                    <ThumbUpAltOutlinedIcon />
                    <p>Like</p>
                </div>
                <div className="postcontentcard__footerIcon">
                    <CommentOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="postcontentcard__footerIcon">
                    <ReplyOutlinedIcon />
                    <p>Share</p>
                </div>
                <div className="postcontentcard__footerIcon">
                    <NearMeOutlinedIcon />
                    <p>Send</p>
                </div>


            </div>
        </div>
    )
}

export default PostContentCard
