import React from 'react'
import "./Messages.css"
import {Avatar, IconButton} from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import { useStateValue } from "../StateProvider";

function Messages() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="messages">
            <div className="messages__left">
            <Avatar src={user?.photoURL} alt="user photo"/>
            <h3>Messaging</h3>
            </div>
            <div className="messages__right">
                <IconButton className="messages__rightButton">
                <CreateOutlinedIcon />
                </IconButton>
            <IconButton className="messages__rightButton"><MoreHorizOutlinedIcon /></IconButton>
            <IconButton className="messages__rightButton"><ExpandLessOutlinedIcon /></IconButton>
            
            </div>
           
        </div>
    )
}

export default Messages
