import React from 'react'
import "./NewsCard.css"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function NewsCard() {
    return (
        <div className="newscard">
            <div className="newscard__top">
                <h3>LinkedIn News</h3>
                <InfoOutlinedIcon />
            </div>
            <div className="newscard__textContainer">
                <span className="newscard__textContainerSpan">
                    <FiberManualRecordIcon />
                    <h4>Mental health takes central stage</h4>
                </span>
                <p>2d ago 2,959 reader</p>
            </div>

            <div className="newscard__textContainer">
                <span className="newscard__textContainerSpan">
                    <FiberManualRecordIcon />
                    <h4>Your email doesn't need all caps</h4>
                </span>
                <p>3d ago 3,553 reader</p>
            </div>

            <div className="newscard__textContainer">
                <span className="newscard__textContainerSpan">
                    <FiberManualRecordIcon />
                    <h4>Make time for work friends</h4>
                </span>
                <p>3d ago 1,959 reader</p>
            </div>

            <div className="newscard__textContainer">
                <span className="newscard__textContainerSpan">
                    <FiberManualRecordIcon />
                    <h4>Resting the urge of muiltitask</h4>
                </span>
                <p>3d ago 2,232 reader</p>
            </div>

            <div className="newscard__textContainer">
                <span className="newscard__textContainerSpan">
                    <FiberManualRecordIcon />
                    <h4>The side effects of remote work</h4>
                </span>
                <p>3d ago 427 reader</p>
            </div>
        </div>
    )
}

export default NewsCard
