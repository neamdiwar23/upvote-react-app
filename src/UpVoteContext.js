import React, { useState } from "react";
 
export const UpVoteContext = React.createContext();

export const UpVoteContextProvider = ({ children }) => {
    const [upvoteList, updateUpvoteList] = useState([]);

    const addUpvote = (newUpvote) => {
      updateUpvoteList([...upvoteList, newUpvote]);
      };
     
      const updateUpvote = (upvoteId) => {
        updateUpvoteList(upvoteList.filter((upvote) => upvote.id !== upvoteId));
      };

 
    return (
        <UpVoteContext.Provider value={{ upvoteList, addUpvote, updateUpvote }}>
            {children}
        </UpVoteContext.Provider>
    );
};