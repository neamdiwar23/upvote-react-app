import * as React from "react";
import { useState, useEffect } from "react";
import Button from "./button.js";
import Upvote from "./upvote.js";


function UpVoteList(props) {

  const [upvoteListID] = useState(props.index);
  const [upvoteList, updateUpvoteList] = useState([]);

  const handleAddUpvote = () => {
    updateUpvoteList([...upvoteList, {state: 'default'}]);
  };

 
  return (
    <div className="upvote-container" id={upvoteListID}>     
      <div className="upvote-list">       
        {upvoteList.map((item, index) => (          
            <Upvote 
            listid={upvoteListID} 
            index={index}  
            id={upvoteListID + "_" + index} 
            list={upvoteList} 
            state={item.state} />                  
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