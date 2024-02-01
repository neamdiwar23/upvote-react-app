import './App.css';
import React from 'react';
import UpVoteList from './components/upvotelist.js';
import { UpVoteContextProvider } from './UpVoteContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Upvote React Assessment</h3>
      </header>
    
      <div className="main-container"> 
        <UpVoteContextProvider>
          <UpVoteList index={0}/>
          <UpVoteList index={1}/>          
          <UpVoteList index={2}/>
        </UpVoteContextProvider>
      </div>     
    </div>
  );
}

export default App;
