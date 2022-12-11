// Modules //
const gameBoard = () => {

}

const displayController = () => {

}

// Factories //

const players = (name, xo) => {
    console.log(`${name} is playing with ${xo}'s!`);
    return {name, xo};
}

jeff = players('jeff', 'X');
mark = players('mark', 'O');

// Query Selectors //