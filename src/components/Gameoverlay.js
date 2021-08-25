import React from 'react'
import tryAgainLogo from '../assets/img/try-again.gif'

const Gameoverlay = ({onRestart, board}) => {
    if(board.hasWon()){
        return <div className="tile2048"></div>
    }else if(board.hasLost()){
        return (
            <div className="gameOver" onClick={onRestart}>
                <img
                    src={tryAgainLogo} 
                    alt="Try Again" 
                    style={{
                        width:"100%",
                        height:"100%",
                        cursor:"pointer",
                    }}
                />
            </div>
        )
    }
    return null;
   
}

export default Gameoverlay
