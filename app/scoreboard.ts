/// <reference path="result.interface.ts" />


class Scoreboard {
    private results: IResult[] = [];

    addResult(newResult: IResult): void {
        this.results.push(newResult);
    }

    updateScoreboard(){
        let output: string = '<h2>Scoreboard</h2>';

        this.results.forEach(result =>{
            output += `<h4>${result.playerName} : ${result.score} / ${result.problemCount} for factor ${result.factor} </h4>`
        });

        const scoreElement: HTMLElement = <HTMLElement>document.getElementById('scores');
        scoreElement.innerHTML = output;

    }
}