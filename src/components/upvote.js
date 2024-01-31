import React, { useState } from "react";

function Upvote(props) {

  const [isSelected, setSelected] = useState("false");

  const toggleUpvote = () => {
    setSelected(!isSelected); 
   };
 
  return (
    <button className={isSelected ? "button upvote-button upvote-default" : "button upvote-button upvote-selected"} onClick={toggleUpvote}>
      &#8593;
    </button>

  );
}

export default Upvote;