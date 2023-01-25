import React from "react";
import PostCreat from "./PostCreat";
import PostList from "./PostList";

export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreat />
      <hr />
      <PostList />
    </div>
  );
};
