import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let color;
    if (comment.status === "approved") color = 'green';
    if (comment.status === "pending") color = "blue";
    if (comment.status === "rejected") color = "red";

    return (
      <li key={comment.id} >
        <p style={{color}}>{comment.content}</p>
      </li>
    );
  });

  return <ul> {renderedComments}</ul>;
};
