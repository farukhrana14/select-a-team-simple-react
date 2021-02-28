import React from 'react';
import './Player.css'


const Player = (props) => {
    const{allRounderRating, battingStyle, country, fee_mln_rupee, img, name} = props.player;
    return (
        <div>
            <h1>This is Player:{name}</h1>
        </div>
    );
};

export default Player;