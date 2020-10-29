import './Game.css'
import React, { useEffect, useState } from 'react';

function Game({animFlag}) {

    const [userClass, setUserClass] = useState('fas fa-hand-paper');
    const [botClass, setBotClass] = useState('fas fa-hand-paper');

    useEffect(() => {
        setUserClass('fas fa-hand-rock');
        setBotClass('fas fa-hand-rock');
    });

    return(
        <div>
            <div className="flex_row">
                <div id="user_hand"><i id="user_hand" className={userClass}></i></div>
                <div id="bot_hand"><i className={botClass}></i></div>
            </div>
        </div>
    )
}

export default Game;