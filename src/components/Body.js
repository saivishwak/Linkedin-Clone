import React, { useEffect, useState } from "react";
import "./Body.css";
import CreatePost from "./CreatePost";
import PostContentCard from "./PostContentCard";
import PostCard from "./PostCard";
import axios from "../axios";
import Pusher from "pusher-js";
import { useStateValue } from "../StateProvider";

function Body() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.querySelector(".body__preloader").classList.toggle("show");
    axios.get("/api/v1/posts/sync").then((response) => {
      document.querySelector(".body__preloader").classList.toggle("show");
      setPosts(response.data.reverse());
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("", {
      cluster: "",
    });

    const channel = pusher.subscribe("posts");
    channel.bind("inserted", (newPost) => {
      console.log(JSON.stringify(newPost));
      setPosts([newPost, ...posts]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [posts]);

  return (
    <div className="body">
      <div className="body__createpost hide">
        <CreatePost />
      </div>
      <div className="body__container">
        <PostCard />
        <hr></hr>
        <div className="body__posts">
          {posts.map((post) => (
            <PostContentCard post_data={post} />
          ))}
        </div>

        <div className="body__footer"></div>
      </div>
      <div className="body__preloader hide">
        <img src="preloader.svg" alt="preloader" />
      </div>
    </div>
  );
}

export default Body;
