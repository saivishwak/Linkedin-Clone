import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import Body from "./components/Body";
import Messages from "./components/Messages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/">
                {/* Header */}
                <Header />
                <div className="app__container">
                  {/* SideBarLeft */}
                  <SideBarLeft />
                  {/* Body */}
                  <Body />
                  {/* SideBarRight */}
                  <SideBarRight />
                </div>
                <Messages />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
