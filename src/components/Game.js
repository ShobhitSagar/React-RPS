import './Game.css'
import Score from './Score'
import React, { useEffect, useRef, useState } from 'react';

function Game({animFlag, setAnimFlag, userHand, botHand}) {

    const [userClass, setUserClass] = useState('fa-hand-paper');
    const [botClass, setBotClass] = useState('fa-hand-paper');

    const [userScore, setUserScore] = useState(0);
    const [botScore, setBotScore] = useState(0);

    const user_hand = useRef();

    useEffect(() => {

        const setUserHand = () => {
            if (userHand === 1) {setUserClass('fa-hand-rock')}
            else if (userHand === 2) {setUserClass('fa-hand-paper')}
            else if (userHand === 3) {setUserClass('fa-hand-peace')}
        }

        const setBotHand = () => {
            if (botHand === 1) {setBotClass('fa-hand-rock')}
            else if (botHand === 2) {setBotClass('fa-hand-paper')}
            else if (botHand === 3) {setBotClass('fa-hand-peace')}
        }

        if(animFlag) {
            setAnimFlag(false);
            if (userHand !== botHand) {
                if ((userHand === 1 && botHand === 3) || (userHand === 2 && botHand === 1) || (userHand === 3 && botHand === 2)) {
                    setUserScore(userScore + 1);
                } else {
                    setBotScore(botScore + 1);
                }
            }
        // console.log("user TYPE : "+ typeof(userHand));
        // if (animFlag > 0) {
        //     setUserClass('fa-hand-rock');
        //     user_hand.current.classList.add('user_hand_anim');
        //     setTimeout(() => {
                // user_hand.current.classList.remove('user_hand_anim');
                setUserHand();
                setBotHand();
        }
                // setUserClass('fa-hand-peace');
        //     }, 1500);
        // }
        // setBotClass('fa-hand-rock');
    }, [animFlag, setAnimFlag, userHand, botHand, userScore, botScore]);

    return(
        <div className="game_col">
            <Score userScore={userScore} botScore={botScore}/>
            <div className="game_flex_row">
                <div id="user_hand"><i ref={user_hand} id="user_hand" className={`fas ${userClass}`}></i></div>
                <div id="bot_hand"><i className={`fas ${botClass}`}></i></div>
            </div>
        </div>
    )
}

export default Game;