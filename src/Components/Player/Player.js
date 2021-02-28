import React from 'react';
import './Player.css'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


const Player = (props) => {
    const { allRounderRating, battingStyle, country, fee_mln_rupee, img, name } = props.player;
    return (
      <div className='player-container'>
        <div className='single-player'>
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <hr/>
          <CardSubtitle tag="h5" className="mb-2 text-muted"><strong>Player Information</strong></CardSubtitle>
          
          <ul>
            <li>All Rounder Rating: {allRounderRating} </li>
            <li>Batting Style: {battingStyle} </li>
            <li>Country: {country}</li>
            <li>Match Fee (Million USD): {fee_mln_rupee}</li>
          </ul>
          <hr/>
          <Button>Add Player</Button> <span></span>
          <Button>Remove Player</Button>
        </CardBody>
      </Card>
      </div>
      </div>
    );
};

export default Player;