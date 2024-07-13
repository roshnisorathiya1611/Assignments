
import Cell from './components/Cell'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  
  const [board,setBoard] = useState([" "," "," "," "," "," "," "," "," "])
  const [player,setPlayer] = useState("X")
  const [winner,setWinner] = useState(null)
  const [wins,setWins] = useState({ "X" : 0, "o" : 0})

  function flipPlayer()
  {
    if(player == "X")
      {
        setPlayer("0")
      }
      else
      {
        setPlayer("X")
      }
  }
 
  function handlePlay(index)
  {
    if(winner != null)
      {
        alert("Game is over please restart!")
        return;
      }
    if(board[index] == " ")
      {
        let newBoard = [...board]
        newBoard[index] = player
        setBoard(newBoard)
        flipPlayer()
      }
      else
      {
        alert("Don't Cheat")
      }
  }

  function checkWins(value)
  {
    if(board[0] == value && board[1] == value && board[2] ==value
    )
    return true;

    if(board[3] == value && board[4] == value && board[5] ==value
    )
    return true;

    if(board[6] == value && board[7] == value && board[8] ==value
    )
    return true;

    if(board[0] == value && board[3] == value && board[6] ==value
    )
    return true;

    if(board[1] == value && board[4] == value && board[7] ==value
    )
    return true;

    if(board[2] == value && board[5] == value && board[8] ==value
    )
    return true;

    if(board[0] == value && board[4] == value && board[8] ==value
    )
    return true;

    if(board[2] == value && board[4] == value && board[6] ==value
    )
    return true;

    return false;
  }

  function resetGame() {
    setBoard([" ", " ", " ", " ", " ", " ", " ", " ", " "])
    setPlayer("X")
    setWinner(null)
  }

  useEffect(() =>{
    let x = checkWins("X")
    let o = checkWins("0")
      if(x == true)
        {
            setWinner("X")
        }
      else if (o == true)
        {
            setWinner("0")
        }
      else
      {
          let flag = false;
          for(let item of board)
            {
                if(item == " ")
                  {
                    flag = true;
                    break;
                  }
            }
            if(flag == false)
              {
                setWinner("no one")
              }
      }
  }, [board])

  return (
    <div className='text-center mt-5'>
      <p>Tic Tac Toe</p>
      {
        winner != null ? <div> <p>Game is Over! {winner} won the Game!</p>
        <button onClick={resetGame} className='btn btn-sm btn-primary mb-2'>Reset Game</button> </div>
        : null
      }
      <p>Turn : {player}</p>
      <div className='main mx-auto'>
      {board.map( (item,index) =>{
          return <Cell index={index} clickFunction={handlePlay} value={item}/>
      })}
      </div>
    </div>
  )
}

export default App
