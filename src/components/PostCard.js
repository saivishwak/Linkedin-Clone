import React from 'react'
import "./PostCard.css"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

function PostCard() {
    const createPost = () => {
        document
            .querySelector(".body__createpost")
            .classList.toggle("show");
    }
    return (
        <div className="postcard">
            <div className="postcard__top">
                <button onClick={createPost}>
                    <CreateOutlinedIcon />
                    <p>Start a post</p></button>
            </div>
            <hr></hr>
            <div className="postcard__bottom">
                <div className="postcard__bottomIcon">
                    <CameraAltOutlinedIcon id="camera" />
                    <p>Camera</p>
                </div>
                <div className="postcard__bottomIcon">
                    <VideocamOutlinedIcon id="video" />
                    <p>Video</p>
                </div>
                <div className="postcard__bottomIcon">
                    <EventOutlinedIcon id="event" />
                    <p>Event</p>
                </div>
                <div className="postcard__bottomIcon">
                    <DescriptionOutlinedIcon id="article" />
                    <p>Write Article</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
