console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- Constants -----*/



/*----- App's State (Variables) -----*/

let board;

let turn = 'X';

/*----- Cached Element References -----*/
              
              //Array.from makes an array from all//
              //elements returned by querySelectorAll//
const squares = Array.from(document.querySelectorAll('#board div'));
                                                    //finding element of id: .board//
                                                    //and children: div//
/*----- Event Listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

/*----- Functions -----*/

function init()
{
    board = [
                '', '', '',
                '', '', '',
                '', '', ''
            ];

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
}

function handleTurn(event) 
{
    let idx = squares.findIndex(
        function(square) 
        {
            return square === event.target;
        }
                               );
    board[idx] = turn;        
    console.log(board);
}

