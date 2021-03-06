import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
import { Col, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row } from 'reactstrap';


const Player = (props) => {
  const { allRounderRating, battingStyle, country, fee_mln_rupee, img, name } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  // const handleRemovePlayer = props.handleRemovePlayer;



  return (

    <div className='player-container' >
      <div className='single-player'>
        <Row>
          <Col xs={6}>

            <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody className="card-body">
              <CardTitle tag="h5">{name}</CardTitle>
              <hr />
              <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Player Information</strong></CardSubtitle>

              <ul className='player-stats'>
                <li>All Rounder Rating: {allRounderRating} </li>
                <li>Batting Style: {battingStyle} </li>
                <li>Country: {country}</li>
                <li>Match Fee (Million USD): {fee_mln_rupee}</li>
              </ul>
              <hr />
              <Button className='btn' onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlusSquare} />Add </Button>
              <br />
              <br />
              <Button className='btn' onClick={() => window.location.reload(false)}><FontAwesomeIcon icon={faMinusSquare} />Remove All</Button>

            </CardBody>

          </Col>
        </Row>
      </div>
    </div>

  );
};

export default Player;