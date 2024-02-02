import * as React from "react";
import { useState } from "react";
import Button from "./button.js";

function Upvote(props) {
  return (
    <Button 
      id={props.id} 
      className={`button upvote-button upvote-${props.state}` } 
      onClick={() => {
        props.upVoteClick(props.index)
      }}
      >
    &#8593;
  </Button>
  );
}

export default Upvote;