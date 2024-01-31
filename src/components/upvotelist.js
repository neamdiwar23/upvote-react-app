import * as React from "react";
import { useState } from "react";
import Upvote from "./upvote.js";


function UpvoteList(props) {

  const [upvoteListID] = useState(props.name);
  const [upvoteList, updateUpvoteList] = useState([]);

  const handleAddUpvote = () => {
    updateUpvoteList([...upvoteList, {class: 'default'}]);

  };

 
  return (
    <div className="upvote-container" id={upvoteListID}>     
      <div className="upvote-list">       
        {upvoteList.map((item, index) => (          
            <Upvote id={upvoteListID + "_" + index} />         
          ))}

      </div>
      <button className="button upvote-addbtn" 
        onClick={() => handleAddUpvote()}>
        &#43;
      </button>
          
    </div>
  );
}

export default UpvoteList;