/// <reference path="person.interface.ts" />

class Player implements IPerson {
    name: string;
    age?: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}