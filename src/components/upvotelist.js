import * as React from "react";
import { useState, useContext } from "react";
//import { UpVoteContext } from "../UpVoteContext";
import Button from "./button.js";
import Upvote from "./upvote.js";


function UpVoteList(props) {

  const [upvoteListID] = useState(props.index);
  const [upvoteList, updateUpvoteList] = useState(() => []);

  const handleAddUpvote = () => {   
    updateUpvoteList(prevUpvoteList => {
      return [...prevUpvoteList, {state: 'default'}]
      });
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

        //     <Button 
        //     id={upvoteListID + "_" + index}
        //     className={`button upvote-button upvote-${isSelected}` } 
        //     state={item.state}
        //     onClick={toggleUpvote}>
        //   &#8593;
        // </Button>

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