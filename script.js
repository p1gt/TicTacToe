let board = [['', '', ''], ['', '', ''], ['', '', '']];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    if (board[row][col] === '' && !gameOver) {
        board[row][col] = currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;

        if (checkWinner(currentPlayer)) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = 'It\'s a draw!';
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] === player &&
            board[i][1] === player &&
            board[i][2] === player
        ) {
            return true;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (
            board[0][j] === player &&
            board[1][j] === player &&
            board[2][j] === player
        ) {
            return true;
        }
    }

    if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
    ) {
        return true;
    }

    if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
        return true;
    }

    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}
function blue(element){
    element.style.backgroundColor = '#00ffea'
}
function green(element){
    element.style.backgroundColor = '#00ff11'
}