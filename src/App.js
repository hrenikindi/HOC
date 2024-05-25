import "./styles.css";
import React, { Component } from "react";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Like Counter App</h1>
        <LikeImage />
        <LikePost />
      </div>
    );
  }
}

export default App;
