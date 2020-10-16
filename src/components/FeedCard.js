import React from 'react'
import "./FeedCard.css"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

function FeedCard() {
    return (
        <div className="feedcard">
            <div className="feedcard__top">
                <h3>Add to your feed</h3>
                <InfoOutlinedIcon />
            </div>
            <div className="feedcard__textContainer">
                <span className="feedcard__textContainerSpan">
                    <img src="company_img.png" alt="company image" />
                    <h4>#Software Engineer</h4>
                    <button>
                        <AddOutlinedIcon />
                        <h3>Follow</h3>
                    </button>

                </span>

                <span className="feedcard__textContainerSpan">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQE8jiDqm9nLLg/company-logo_200_200/0?e=1610582400&v=beta&t=LT_uJno8mdSlFSO6769ti38J5xrgCzA7qbVoEBhx5Y4" alt="company image" />
                    <h4>#Tata Consultancy Serivces</h4>
                    <button>
                        <AddOutlinedIcon />
                        <h3>Follow</h3>
                    </button>

                </span>

                <span className="feedcard__textContainerSpan">
                    <img src="company_img.png" alt="company image" />
                    <h4>#Internship Offers</h4>
                    <button>
                        <AddOutlinedIcon />
                        <h3>Follow</h3>
                    </button>

                </span>
            </div>
        </div>
    )
}

export default FeedCard
