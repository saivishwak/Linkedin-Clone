import React from 'react'
import "./SideBarRight.css"
import NewsCard from "./NewsCard"
import FeedCard from "./FeedCard"

function SideBarRight() {
    return (
        <div className="sideBarRight">
            <NewsCard />
            <FeedCard />
            <hr></hr>
            <div className="sideBarRight__footer">
                <div className="sideBarRight__footerTop">
                    <p>About</p>
                    <p>{'Privacy & Terms'}</p>
                    <p>Help Center</p>
                </div>
            </div>
        </div>
    )
}

export default SideBarRight
