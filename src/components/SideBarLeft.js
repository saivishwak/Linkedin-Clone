import React from 'react'
import "./SideBarLeft.css"
import ProfileCard from "./ProfileCard";
import DiscoverCard from "./DiscoverCard"

function SideBarLeft() {
    return (
        <div className="sideBarLeft">
            <ProfileCard />
            <DiscoverCard />
        </div>
    )
}

export default SideBarLeft
