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
    [2, 4, 6]
    ];

    const [board, setBoard] = React.useState(["","","","","","","","",""])

    let turn;

    let win;

    function handleTurn(event) 
    {
        let i = event.target.id;

        if((win == null) && ((board[i] != 'X') && (board[i] != 'O'))) // if board square is empty and there is no winner then
        {
            let newBoard = [...board];
            newBoard[i] = turn;
            setBoard(newBoard);

            if (turn === 'X') turn = 'O';
            else              turn = 'X';
        } 
        win = getWinner();
        render();
    }

    return (
        <div>
          <h1>Tic-React-Toe</h1>
          <h2>It's X's turn!</h2>
          <div class="flex-container flex-column">
            <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
              {board.map((value, i) => {
                return (
                  <div class="square" key={i} id={i}>
                    {value}
                  </div>
                )
              })}
            </div>
            <button id="reset-button">reset</button>
          </div>
        </div>
      )
}
ReactDOM.render(<App />, root)