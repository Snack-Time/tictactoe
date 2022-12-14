// Query Selectors //
const cells = document.querySelectorAll(".cell");
const startScreen = document.querySelector("#start-container");
const gameScreen = document.querySelector("#game-container");
const turnIndicator = document.querySelector(".turn-indicator");

// Modules //
const gameBoard = (() => {

    let playingField = [];
    for (i = 0; i < 9; i++){
        playingField.push([""])
    };
    let winnerFound = false;
    let tieCounter = 0;

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
            if (playingField[combs[i][0]]  === `${currentPlayer.mark}` && 
                playingField[combs[i][1]]  === `${currentPlayer.mark}` && 
                playingField[combs[i][2]] === `${currentPlayer.mark}`){
                winnerFound = true;
            }
        };
        
    };
        
    const newGame = () => {
        currentPlayer = playerUno;
        return playingField;
    };
    
    const gameBoardClick = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log("ping");
                if (cell.hasAttribute("data-mark") || cell.hasAttribute("data-game")){
                    return; 
                }
                cell.setAttribute("data-mark", `${currentPlayer.mark}`);
                cell.setAttribute("style", `background-color: ${currentPlayer.color}`)
                playingField[cell.getAttribute("data-cell")] = `${currentPlayer.mark}`;
                tieCounter++
                winConditions();
                if (winnerFound === true) {
                    turnIndicator.innerHTML = `${currentPlayer.name} has won!`;
                    endGame();
                }
                else if (tieCounter === 9){
                    turnIndicator.innerHTML = `Tie Game!`;
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
        turnIndicator.innerHTML = `It is ${currentPlayer.name}'s turn!`;
    }

    const endGame = () => {
        winnerFound = false;
        tieCounter = 0;
        playingField.length = 0;
        for (i = 0; i < 9; i++){
            playingField.push([""])
        };;
        cells.forEach(cell => {
            cell.setAttribute("data-game","over");
        });
        return playingField;
    };

    const refreshBoard = () => {
        endGame();
        cells.forEach(cell => {
            cell.removeAttribute("data-mark");
            cell.removeAttribute("style")
            cell.removeAttribute("data-game");
        });
        currentPlayer = playerUno;
        turnIndicator.innerHTML = `It is ${currentPlayer.name}'s turn!`;
    };

    const nameGrab = () => {
        const nameOne = document.getElementById("nameOne").value;
        const nameTwo = document.getElementById("nameTwo").value;
        playerUno = player(nameOne, "X", "#2a9d8f")
        playerDos = player(nameTwo, "O", "#f4a261");
    }

    return {newGame, gameBoardClick, winConditions, refreshBoard, nameGrab}
    
})();

// Buttons //

const newGame = () => {
    startScreen.style.display = "none";
    gameScreen.style.display = "grid";
    gameBoard.nameGrab();
    gameBoard.newGame();
    gameBoard.gameBoardClick();
    turnIndicator.innerHTML = `It is ${currentPlayer.name}'s turn!`;
};

const newBoard = () => {
    gameBoard.refreshBoard();
};

// Factories //

const player = (name, mark, color) => {
    return {name, mark, color};
}

let playerUno = player("Evil Uno", "X", "#2a9d8f");
let playerDos = player("Stu Grayson", "O", "#f4a261");

