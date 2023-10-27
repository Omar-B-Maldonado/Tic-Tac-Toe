function App() 
{ 
    const winningCombos = 
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const [board, setBoard]       = React.useState(["","","","","","","","","",]);
    const [turn, setTurn]         = React.useState("X");
    const [message, setMessage]   = React.useState(`It's ${turn}'s turn!`);
   
    const [gameOver, setGameOver] = React.useState(false);
    const [win, setWin]           = React.useState(null);
  
    function handleTurn(event) 
    {
      if (gameOver) return;
      let i        = event.target.id;
      let newBoard = [...board];
      newBoard[i]  = turn;
      
      setBoard(newBoard);
      
      if (newBoard[i] == 'X') setTurn('O');
      else                    setTurn('X');
    }
    
    React.useEffect(() => {
      let winner = getWinner();
      setWin(winner);
  
      if (winner == null)  setMessage(`It's ${turn}'s turn!`);
      else
      {
        setGameOver(true);
        if (winner == "T") setMessage(`It's a tie!`);
        else               setMessage(`${winner} wins the game!`);
      }      
    }, [board]);
    
    function handleReset() 
    {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setTurn('X');
      setGameOver(false);
    }
  
    function getWinner() 
    {
      let winner = null;
      winningCombos.forEach(function (combo, i) {
        if (
          board[combo[0]] &&
          board[combo[0]] === board[combo[1]] &&
          board[combo[0]] === board[combo[2]]
        )
          winner = board[combo[0]];
      });
        if (winner)             return winner;
        if (board.includes("")) return null;
                                return "T";
    }
   
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
  
        <h2>{message}</h2>
  
        <div class="flex-container flex-column">
          <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
            {board.map((value, i) => 
            {
              return (
                <div class="square" key={i} id={i}>{value}</div>
              );
            })}
          </div>
  
          <button id="reset-button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, root);