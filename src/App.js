import './App.css';
import React from 'react';
import UpvoteList from './components/UpvoteList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Upvote React Assessment</h2>
      </header>

      <div className="main-container">
        {/* <div class="upvote-container">
          <div class="upvote-list">
            <button class="button upvote-button upvote-default">&#8593;</button>
            <button class="button upvote-button upvote-selected">&#8593;</button>
          </div>
          <button class="button upvote-addbtn">&#43;</button>       
        </div> */}
        <UpvoteList name={"list1"}></UpvoteList>
        <UpvoteList name={"list2"}></UpvoteList>

      </div>

    </div>
  );
}

export default App;
