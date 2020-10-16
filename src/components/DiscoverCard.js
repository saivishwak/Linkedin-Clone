import React from 'react'
import "./DiscoverCard.css"

function DiscoverCard() {
    return (
        <div className="discovercard">
            <div className="discovercard__top">
                <div className="discovercard__topContainer">
                    <p>Recent</p>
                </div>
                <div className="recentContainer">
                    <div className="discovercard__topContainer hash_text">
                        <p># Technology</p>
                    </div>
                    <div className="discovercard__topContainer hash_text">
                        <p># Science</p>
                    </div>
                    <div className="discovercard__topContainer hash_text">
                        <p># engineering</p>
                    </div>

                </div>

                <div className="discovercard__topContainer" id="groups">
                    <p>Groups</p>
                </div>
                <div className="discovercard__topContainer">
                    <p>Events</p>
                </div>
                <div className="discovercard__topContainer" id="groups">
                    <p>Followed Hastags</p>
                </div>
                <div className="followed__hastags">
                    <div className="discovercard__topContainer hash_text">
                        <p># engineering</p>
                    </div>
                    <div className="discovercard__topContainer hash_text">
                        <p># Science</p>
                    </div>
                    <div className="discovercard__topContainer hash_text">
                        <p># Technology</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="discovercard__bottom">
                <h3>Discover More</h3>
            </div>
        </div>
    )
}

export default DiscoverCard
