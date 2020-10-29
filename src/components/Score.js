import React from 'react';

function Score({userScore, botScore}) {
    return (
        <div className="flex_row score_div">
            <h3>User : {userScore}</h3>
            <h3>Bot : {botScore}</h3>
        </div>
    );
}

export default Score;