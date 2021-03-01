import React from 'react';

const Selection = (props) => {
    const { id, fee_mln_rupee, name } = props.selectPlayer;
    const players = props.selectPlayer;
    
    let totalBudget = 0;
    for (let index = 0; index < players.length; index++) {
        const player = players[index];
        totalBudget += player.fee_mln_rupee; 
    }
    
    // const totalBudget = players.reduce((sum, player) => sum + props.players.fee_mln_rupee, 0);
    // console.log(totalBudget);     

    return (
        
            <div className='player-stats'>
                    <div className='player-stats1'>
                        <h4>Selected Players: {players.length}</h4>

                        {players.map(player => <p key={player.id}>{player.name}</p>)}

                    </div>
                    <div className='player-stats1'>
                        <h4>Total Budget:</h4>
                        <p>USD {totalBudget} Million</p>
                    </div>

              </div>
        
    );
};

export default Selection;