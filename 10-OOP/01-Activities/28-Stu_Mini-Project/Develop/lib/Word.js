const Letter = require("./Letter");

class Word {
    constructor(arr) {
        this.letters = arr.split("").map(char => new Letter(char));
    }
    getSolution() {
        return this.letters
            .map(letter => letter.getSolution())
            .join("");
    }

    toString() {
        return this.letters.join(" ");
    }

    guessLetter(char) {
        let foundLetter = false;
        this.letters.forEach(letter => {
            if (letter.guess(char)) {
                foundLetter = true;
            }
        });

        return foundLetter;
    }

    guessedCorrectly() {
        //every() method returns true if the callback function returns true for every element in the array
        return this.letters.every(letter => letter.visible);
    }
}



module.exports = Word;
