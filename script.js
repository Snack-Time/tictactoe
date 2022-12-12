// Query Selectors //
const cells = document.querySelectorAll(".cell");

// Modules //
const gameBoard = (() => {
        
    const newGameBoard = () => {
        const playingField = [];
        for (i = 0; i < 9; i++){
            playingField.push([""])
        };
        currentPlayer = playerUno;
        return {playingField};
    };
    
    const gameBoardClick = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log("ping");
                if (cell.hasAttribute("data-mark")){
                    return;
                }
                cell.setAttribute("data-mark", `${currentPlayer.mark}`);
                swapTurn();
            });
        });        
    };

    const swapTurn = () => {
        if (currentPlayer === playerUno) {
            currentPlayer = playerDos;
        } else {
            currentPlayer = playerUno;
        };
    }

    return {newGameBoard, gameBoardClick}
    
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