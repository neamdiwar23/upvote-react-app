import './App.css';
import React from 'react';
import UpVoteList from './components/upvotelist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Upvote React Assessment</h3>
      </header>

      <div className="main-container">        
        <UpVoteList index={0}></UpVoteList>
        <UpVoteList index={1}></UpVoteList>
      </div>

    </div>
  );
}

export default App;
