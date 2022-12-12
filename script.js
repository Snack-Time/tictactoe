// Modules //
const gameBoard = () => {
    
    const playingField = [];
    for (i = 0; i < 9; i++){
        playingField.push([""])
    };
    console.log(playingField);
    return {playingField};

}

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

// Event Selector //