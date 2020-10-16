import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Avatar from "@material-ui/core/Avatar";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const dropdown = () => {
    document.querySelector(".avatar__dropdown").classList.toggle("show");
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <img
            src="https://mkttpmba.s3-eu-west-1.amazonaws.com/Web/global/img/Linkedin-s%C3%ADmbolo.png"
            alt="logo"
          />
          <div className="header__search">
            <div className="header__searchContainer">
              <SearchOutlinedIcon />
              <input placeholder="Search"></input>
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="icon__container">
            <HomeOutlinedIcon />
            <p>Home</p>
          </div>
          <div className="icon__container">
            <PeopleOutlineIcon />
            <p>My Network</p>
          </div>
          <div className="icon__container">
            <WorkOutlineIcon />
            <p>Jobs</p>
          </div>
          <div className="icon__container">
            <QuestionAnswerOutlinedIcon />
            <p>Messaging</p>
          </div>
          <div className="icon__container">
            <NotificationsNoneOutlinedIcon />
            <p>Notifications</p>
          </div>
          <div className="icon__container icon__avatar">
            <Avatar src={user?.photoURL} alt="user photo" />
            <div className="icon__containerArrow " onClick={dropdown}>
              <p>Me</p>
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="icon__container">
            <AppsOutlinedIcon />
            <p>Work</p>
          </div>
        </div>
      </div>
      <div className="avatar__dropdown">
        <div className="avatar__dropdownTop">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_Suz0wLp_6AeeTc0Gm8qDCm_d7pYGDUFjU7Gzg=s32-c-mo" />
          <p>sai vishwak</p>
        </div>
        <div className="avatar__dropdownBottom">
          <button onClick={() => window.location.reload(false)}>
            <p>Log out</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
