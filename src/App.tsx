import React from 'react';
import './App.css';
import ManComponent from "./07_destructuring_assignment/07";

const names = ["Edward", "Nicole", "Andrew", "Margaret"]
const users = [{id: 5464, name: "Edward"}, {id: 59, name: "Nicole"}, {id: 48,name: "Andrew"}, {id: 54, name: "Margaret"}]
const usersList = users.map((u, index) => <li key={u.id}>{index}-{u.name}</li>)
const list = names.map(( n, index) => <li key={index}>{n}</li>)
function App() {

    const car = { model: 'Toyota'}
    const food = ['tomyam ', 'ceaser ', 'ice-cream ']

  return (
    <>
      <ul>
        {list}
      </ul>
      <ul>
        {usersList}
      </ul>
        <ManComponent name={'Andrew'} age={26} isMarried={true} car={car} food={food} />

    </>
  );
}

export default App;
