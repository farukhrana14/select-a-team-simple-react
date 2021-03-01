
import './App.css';
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Header from './Components/Header/Header';
import Selection from './Components/Selection/Selection'

function App() {

  const [players, setPlayers] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);

  const handleAddPlayer = (player) => {



    let newSelectPlayer = [...selectPlayer, player];
    setSelectPlayer(newSelectPlayer);

  }

  useEffect(() => {
    fetch('https://api.mocki.io/v1/e04f04cc')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.log(error))
  }, [])




  return (

    <div>
      <div className='header-class'>
        <div className='header'>
          <Header></Header>
        </div>
        <div className='selected'>
          <Selection selectPlayer={selectPlayer}><h1>This is Selection</h1> </Selection>
        </div>
      </div>

      {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }


    </div>
  );
}

export default App;
