
import React from 'react';
import { Table } from 'reactstrap';


const Selection = (props) => {
    const players = props.selectPlayer;

    let totalBudget = 0;
    for (let index = 0; index < players.length; index++) {
        const player = players[index];
        totalBudget += player.fee_mln_rupee;
    }

    // const totalBudget = players.reduce((sum, player) => sum + props.players.fee_mln_rupee, 0);
    

    return (

        <div className='player-stats'>
            <div className='player-stats1'>
                <h5>Selected Players: {players.length}</h5>
                <Table>

                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Salary</th>
                        </tr>
                        {players.map(player => <tr key={player.id}><td>{player.name}</td><td>{player.fee_mln_rupee}</td></tr>)}
                    </thead>

                </Table>
            </div>
            <div className='player-stats1'>
                <hr />
                <h6>Total: USD {totalBudget} Million</h6>

            </div>

        </div>

    );
};

export default Selection;