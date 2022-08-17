class Letter {
    constructor(char) {
        this.char = char
        this.visible = !/[a-z1-9]/i.test(char)

    }
    getSolution() {
        return this.char
    }
    guess(charGuess) {
        if (charGuess.toUpperCase() == this.char.toUpperCase()) {
            this.visible = true
            return true
        }
        return false

    }
    toString() {
        if (this.visible == true) {
            return this.char
        }
        else {
            return '_'
        }
    }

}



module.exports = Letter;
