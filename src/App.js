
import './App.css';
import { useEffect, useState } from 'react';
import './Components/Player/Player'
import Player from './Components/Player/Player';

function App() {

const [players, setPlayers] = useState([]);

useEffect(()=>{
  fetch ('https://api.mocki.io/v1/32144364')
  .then(res => res.json())
  .then(data => setPlayers(data))
  .catch(error => console.log(error))
}, [])
console.log(players)


  return (
    <div>
      
      {
        players.map(player =><Player player={player} key={player.id}></Player>)
      }
      
    
    </div>
  );
}

export default App;
