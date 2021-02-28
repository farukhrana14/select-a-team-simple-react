import React from 'react';
import './Player.css'


const Player = (props) => {
    const { allRounderRating, battingStyle, country, fee_mln_rupee, img, name } = props.player;
    return (
        <div className='player-container'>
          <div className='single-player'>
            <img src={img} alt=""/>
            <h3>Name: {name}</h3>
            <hr/>
            <h4>Player Statistics</h4>
            <ul>
              <li>All Rounder Rating: {allRounderRating}</li>
              <li>Batting style: {battingStyle}</li>
              <li>Country: {country}</li>
              <li>Fee in million USD: {fee_mln_rupee}</li>
        
            </ul>
            <hr/>
            <button>Add</button> <span></span>
            <button>Remove</button>

          </div>
        </div>
            
    );
};

export default Player;