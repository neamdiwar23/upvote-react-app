import * as React from "react";
import { useState } from "react";
import Button from "./button.js";

function Upvote(props) {

  const [isSelected, setSelected] = useState(props.state);

  const toggleUpvote = (e) => {
    setSelected(isSelected === 'default' ? 'selected' : 'default'); 
  }

  return (
    <Button 
      id={props.id} 
      className={`button upvote-button upvote-${isSelected}` } 
      onClick={toggleUpvote}>
    &#8593;
  </Button>
  );
}

export default Upvote;