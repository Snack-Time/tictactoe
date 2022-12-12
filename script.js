// Modules //
const gameBoard = (() => {
        
    const newGameBoard = () => {
        const playingField = [];
        for (i = 0; i < 9; i++){
            playingField.push([""])
        };
        console.log(playingField);
        return {playingField};
    };

    const gameBoardClick = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log("ping");
                cell.setAttribute("data-mark", "x");
            });
        });        
    };

    return {newGameBoard, gameBoardClick}
})();

const newGame = () => {
    gameBoard.newGameBoard();
    gameBoard.gameBoardClick();
};

const displayController = () => {

}

// Factories //

const player = (name, mark) => {
    console.log(`${name} is playing with ${mark}'s!`);
    return {name, mark};
}



const playerUno = player("Uno", "X");
const playerDos = player("Stu", "O");

// Query Selectors //
const cells = document.querySelectorAll(".cell");
console.log(cells);

// Event Selector //