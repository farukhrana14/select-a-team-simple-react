import React from 'react';
import './Player.css'
import { Col, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row } from 'reactstrap';


const Player = (props) => {
  const { allRounderRating, battingStyle, country, fee_mln_rupee, img, name } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  

  return (
    
    <div className='player-container' >
      <div className='single-player'>
        <Row>
          <Col xs={4}>
            
              <CardImg top width="100%" src={img} alt="Card image cap" />
              <CardBody className="card-body">
                <CardTitle tag="h4">{name}</CardTitle>
                <hr />
                <CardSubtitle tag="h5" className="mb-2 text-muted"><strong>Player Information</strong></CardSubtitle>

                <ul>
                  <li>All Rounder Rating: {allRounderRating} </li>
                  <li>Batting Style: {battingStyle} </li>
                  <li>Country: {country}</li>
                  <li>Match Fee (Million USD): {fee_mln_rupee}</li>
                </ul>
                <hr />
                <Button onClick={()=> handleAddPlayer(props.player)}>Add / Remove Player</Button> 
                
              </CardBody>
            
          </Col>
        </Row>
      </div>
    </div>
    
  );
};

export default Player;