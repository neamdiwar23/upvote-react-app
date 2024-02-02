import './App.css';
import React, { useEffect, useState } from 'react';
import UpVoteList from './components/upvotelist.js';

function App() {

  const [list, setList] = useState([{id:'list1', upVoteList: []},
    {id:'list2', upVoteList: []},
    {id:'list3', upVoteList: []}])

  const updateList = (updateList, id) => {
    const result = list.map((value) => {
      if (value.id === id) {
        value.upVoteList = updateList;
      }
      return value;
    })  
    setList(result);
    if (updateList.length > 0) {
      window.localStorage.setItem('list', JSON.stringify({storedList: result}));
    }
  }

  useEffect(() => {
    const list = JSON.parse(window.localStorage.getItem('list'));
    if (list && list.storedList){
      setList(list.storedList);
    }
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <h3>Upvote React App</h3>
      </header>
    
      <div className="main-container"> 
          { 
            list && list.map((item, index) => {
              return <UpVoteList key={item.id} id={item.id} upList={item.upVoteList} updateList={updateList}/>
            }) 
          }
      </div>     
    </div>
  );
}

export default App;
