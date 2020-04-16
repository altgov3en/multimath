/// <reference path="utility.ts" />
/// <reference path="scoreboard.ts" />
/// <reference path="result.interface.ts" />
/// <reference path="player.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(
        public player: Player,
        public problemCount: number,
        public factor: number
    ) { }

    displayGame(): void {

        let gameForm: string = '';

        for (let i = 0; i < this.problemCount; i++) {
            gameForm += `
                <div class="form-group">
                    <label for="answer-${i}" class="col-sm-2 control-label">
                        ${this.factor} x ${i} =
                    </label>
                    <div class="col-sm-1">
                        <input id="answer-${i}" type="text" class="form-control" size="5">
                    </div>
                </div>
            `
        }

        const gameElement: HTMLElement = <HTMLElement>document.getElementById('game');
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate')!.removeAttribute('disabled');

    }

    calculateScore(): void {

        let score: number = 0;

        for (let i = 0; i < this.problemCount; i++) {
            const answer: number = Number(Utility.getInputValue(`answer-${i}`));
            if (answer === i * this.factor) {
                score++;
            }
        }

        const result: IResult = {
            factor: this.factor,
            playerName: this.player.name,
            problemCount: this.problemCount,
            score: score
        }

        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        document.getElementById('calculate')?.setAttribute('disabled', 'true');
    }
}
