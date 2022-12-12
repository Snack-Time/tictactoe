// Query Selectors //
const cells = document.querySelectorAll(".cell");

// Modules //
const gameBoard = (() => {

    let playingField = [];
    for (i = 0; i < 9; i++){
        playingField.push([""])
    };
    
    let winnerFound = false

    const winConditions = () => {
        console.log('wincondition check');
        let combs = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let i = 0; i < combs.length; i++) {
            console.log(playingField[combs[i][0]], playingField[combs[i][1]], playingField[combs[i][2]]);
            if (playingField[combs[i][0]] && playingField[combs[i][1]] && playingField[combs[i][2]] === `${currentPlayer.mark}`){
                winnerFound = true;
            }
        };
        
    };
        
    const newGameBoard = () => {
        currentPlayer = playerUno;
        console.log(playingField)
        return playingField;
    };
    
    const gameBoardClick = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log("ping");
                if (cell.hasAttribute("data-mark")){
                    return;
                }
                cell.setAttribute("data-mark", `${currentPlayer.mark}`);
                playingField[cell.getAttribute("data-cell")] = `${currentPlayer.mark}`;
                console.log(playingField);
                winConditions();
                if (winnerFound === true) {
                    winnerFound = false
                    endGame();
                }
                else {
                    swapTurn();
                }
            });
        });        
    };

    const swapTurn = () => {
        if (currentPlayer === playerUno) {
            currentPlayer = playerDos;
        } else {
            currentPlayer = playerUno;
        };
        console.log(`It is ${currentPlayer.name}'s turn.`);
    }

    const endGame = () => {
        alert(`${currentPlayer.name} has won.`)
        let playingField = [];
        for (i = 0; i < 9; i++){
            playingField.push([""])
        };
        console.log(playingField)
        return playingField;
    };

    return {newGameBoard, gameBoardClick, winConditions}
    
})();

const newGame = () => {
    gameBoard.newGameBoard();
    gameBoard.gameBoardClick();
};

const displayController = (() => {
    
    const refreshBoard = () => {
        cells.forEach(cell => {
            cell.removeAttribute("data-mark")
        });
    };


    return {refreshBoard};
})();

const newBoard = () => {
    displayController.refreshBoard();
};

// Factories //

const player = (name, mark) => {
    console.log(`${name} is playing with ${mark}'s!`);
    return {name, mark};
}

let playerUno = player("Evil Uno", "X");
let playerDos = player("Stu Grayson", "O");
let currentPlayer = player("", "");

// Event Selector //