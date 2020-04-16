/// <reference path="player.ts" />
/// <reference path="utility.ts" />
/// <reference path="game.ts" />
/// <reference path="utility.ts" />


// starting new game
let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', () => {

    const newPlayer = new Player();
    newPlayer.name = Utility.getInputValue('playername');

    const problemCount = Utility.getInputValue('problemCount');
    const factor = Utility.getInputValue('factor');

    newGame = new Game(newPlayer, Number(problemCount), Number(factor));

    newGame.displayGame();

});

document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});

