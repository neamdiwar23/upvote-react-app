import * as React from "react";
import { useState, useEffect } from "react";
import Button from "./button.js";
import Upvote from "./upvote.js";


function UpVoteList(props) {

  const [upvoteListID] = useState(props.id);
  const [upvoteList, updateUpvoteList] = useState(props.upList);
  
  const handleAddUpvote = () => {   
    updateUpvoteList(prevUpvoteList => {
      return [...prevUpvoteList, {state: 'default'}]
      });
  };


  const upVoteClick = (index) => {
    updateUpvoteList(upvoteList.map((value, itemIndex) => {
      if(index === itemIndex) {
          value.state = (value.state === 'default') ? 'selected' : 'default';
      }
      return value;
    }))
  }

  useEffect(() => {
      props.updateList(upvoteList, props.id);
  }, [upvoteList])

  useEffect(() => {
      updateUpvoteList(props.upList)
  }, [props.upList])
 
  return (
    <div className="upvote-container" id={upvoteListID}>     
      <div className="upvote-list">       
        {upvoteList.map((item, index) => (         
            <Upvote
            key={index} 
            index={index}  
            state={item.state} 
            upVoteClick={upVoteClick}/>     
          ))}

      </div>
      <Button className="button upvote-addbtn"
        onClick={handleAddUpvote}>
        &#43;
      </Button>
          
    </div>
  );
}

export default UpVoteList;