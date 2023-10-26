console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- Constants -----*/

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

/*----- App's State (Variables) -----*/

let board;

let turn;

let win;

/*----- Cached Element References -----*/
              
              //Array.from makes an array from all//
              //elements returned by querySelectorAll//
const squares = Array.from(document.querySelectorAll('#board div'));
                                                    //finding element of id: .board//
                                                    //and children: div//
const messages = document.querySelector('h2');

/*----- Event Listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click', init);

/*----- Functions -----*/

function init()
{
    board = [
                '', '', '',
                '', '', '',
                '', '', ''
            ];
    win = null;
    turn = 'X';
    render();
}

init();

function render()
{
    board.forEach(
        function(mark, index) 
        {
            //this sets the text content of the square of//
            //the same position to the mark on the board//
            squares[index].textContent = mark;
        }        
                );
                if ( win === 'T' ) 
                {
                    messages.textContent = `That's a tie, queen!`
                } 
                else if (win) 
                { 
                    messages.textContent = `${win} wins the game!`
                } 
                else 
                {
                    messages.textContent = `It's ${turn}'s turn!`
                }
}

function handleTurn(event) 
{
    let i = squares.findIndex(
        function(square) 
        {
            return square === event.target;
        }
                               );
    if((win == null) && (board[i] == '')) // if board square is empty and there is no winner then
    {
        board[i] = turn;                       // board square becomes the mark of whose turn it is
        if (turn === 'X')
        {
            turn = 'O';
        }
        else 
        {
            turn = 'X';
        }
    }
    
    win = getWinner();
    
    render();
}

function getWinner()
{
    let winner = null;

    winningCombos.forEach(
        function(combo, index)
        {
         if (board[combo[0]] && board[combo[0]] === 
             board[combo[1]] && board[combo[0]] ===
             board[combo[2]]) 
             {
                winner = board[combo[0]];
             }
        }
                         );
    if (winner) 
    {
        return winner 
    } 
    else if (board.includes('')) 
    {
        return null // if there's an empty space, return null (no winner yet)
    } 
    else 
    {
        return 'T' // no winner and no empty spaces? That's a tie!
    }
}

