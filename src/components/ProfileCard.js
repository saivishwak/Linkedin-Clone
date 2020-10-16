import React from "react";
import "./ProfileCard.css";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import { useStateValue } from "../StateProvider";

function ProfileCard() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="profilecard">
      <div className="profilecard__top">
        <img src="cover.png" alt="coverimg" />
        <Avatar
          className="profilecard__avatar"
          src={user?.photoURL}
          alt="user photo"
        />
        <h3>{user?.displayName}</h3>
        <p>
          console.log("Software Development" + " | " + "Deep Learning
          Enthusiast")
        </p>
      </div>
      <hr></hr>
      <div className="profilecard__bottom">
        <span className="profilecard__bottomText">
          <h3>Who viewed your profile</h3>
          <p>256</p>
        </span>
        <span className="profilecard__bottomText">
          <h3>Views of your video</h3>
          <p>700</p>
        </span>
      </div>
      <hr></hr>
      <div className="profilecard__bottomSaved">
        <BookmarkBorderOutlinedIcon />
        <h3>Saved items</h3>
      </div>
    </div>
  );
}

export default ProfileCard;
