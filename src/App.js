
import './App.css';
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Header from './Components/Header/Header';
import Selection from './Components/Selection/Selection'

function App() {

  const [players, setPlayers] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);

  const handleAddPlayer = (player) => {
    if (selectPlayer.findIndex(e => e.id === player.id) >= 0) {
      alert('Already Selected')
      
    } else {
      let newSelectPlayer = [...selectPlayer, player];
      setSelectPlayer(newSelectPlayer);
    }
  }

  useEffect(() => {
    fetch('https://select-icc-team.herokuapp.com/playersall')
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
        console.log(data);
      })
      
      .catch(error => console.log('Error-Log=>', error))
  }, [])

  return (

    <div>
      <div className='header-class'>
        <div className='header'>
          <Header></Header>
          
        </div>
        <div className='selected'>
          <Selection selectPlayer={selectPlayer} key={selectPlayer.id}></Selection>
        </div>
      </div>

      {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }


    </div>
  );
}

export default App;
