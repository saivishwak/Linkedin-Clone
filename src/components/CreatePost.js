import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Avatar from "@material-ui/core/Avatar";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import { useStateValue } from "../StateProvider";
import axios from "../axios";

function CreatePost() {
  const [{ user }, dispatch] = useStateValue();
  const [senti, setSenti] = useState("");
  const [text, setText] = useState("");

  const date = new Date();

  {
    /* 
  useEffect(() => {
    if (text) {
      axios
        .post("/api/v1/sentiment", {
          text: text,
        })
        .then((response) => {
          setSenti(response.data.sentiment);
          //console.log(response.data.sentiment);
        });
    }
  }, [text]);
  */
  }

  const closePop = () => {
    setSenti("");
    setText("");
    document.querySelector(".body__createpost").classList.toggle("show");
    document.querySelector(".senti__preloader").classList.remove("show");
  };

  const sentiment = () => {
    //document.querySelector(".senti__preloader").classList.toggle("show");
    axios
      .post("/api/v1/sentiment", {
        text: text,
      })
      .then((response) => {
        //document.querySelector(".senti__preloader").classList.toggle("show");
        setSenti(response.data.sentiment);
        //console.log(response.data.sentiment);
      });
  };

  const sendPost = () => {
    if (text === "") {
      return alert("Please Write a Post");
    } else {
      document.querySelector(".createpost__preloader").classList.toggle("show");
      axios
        .post("/api/v1/posts/new", {
          name: user.displayName,
          post: text,
          timestamp: date.toUTCString(),
          photoURL: user.photoURL,
        })
        .then((response) => {
          document
            .querySelector(".createpost__preloader")
            .classList.toggle("show");
          setText("");
          closePop();
          //console.log(response.data.sentiment);
        });
    }
  };

  return (
    <div className="createpost">
      <div className="createpost__container">
        <div className="createpost__top">
          <p>Create Post</p>
          <CloseOutlinedIcon onClick={closePop} />
        </div>
        <hr></hr>
        <div className="createpost__body">
          <div className="createpost__bodyTop">
            <Avatar src={user?.photoURL} alt="user logo" />
            <h3>{user?.displayName}</h3>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={sentiment()}
            placeholder="What do you want to talk about?"
          />
          <p>{text ? senti : "Sentiment Analysis"}</p>
        </div>
        <div className="createpost__bottom">
          <div className="createpost__bottomHash">
            <h3>Add hashtag</h3>
            <p>#webdevelopment</p>
            <p>#technology</p>
            <p>#react.js</p>
          </div>
          <div className="createpost__bottomContainer">
            <AddOutlinedIcon />
            <CameraAltOutlinedIcon />
            <VideocamOutlinedIcon />
            <EventOutlinedIcon />
            <DescriptionOutlinedIcon />
            {/*<button onClick={sentiment}>Sentiment Analysis</button>*/}
            <button onClick={sendPost}>Post</button>
          </div>
        </div>
      </div>
      <div className="createpost__preloader hide">
        <img src="preloader.svg" alt="preloader" />
      </div>
      <div className="senti__preloader hide">
        <img src="preloader.svg" alt="preloader" />
      </div>
    </div>
  );
}

export default CreatePost;
