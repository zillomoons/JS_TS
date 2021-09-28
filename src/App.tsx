import React from 'react';
import './App.css';

const names = ["Edward", "Nicole", "Andrew", "Margaret"]
const users = [{id: 5464, name: "Edward"}, {id: 59, name: "Nicole"}, {id: 48,name: "Andrew"}, {id: 54, name: "Margaret"}]
const usersList = users.map((u, index) => <li key={u.id}>{index}-{u.name}</li>)
const list = names.map(( n, index) => <li key={index}>{n}</li>)
function App() {

  return (
    <>
      <ul>
        {list}
      </ul>
      <ul>
        {usersList}
      </ul>
    </>
  );
}

export default App;
