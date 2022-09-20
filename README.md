# CodeWarsSolutions
My first attempt at the problem:

GuessWho.prototype.guess = function (guess) {
    // increment turns
    this.turns++
    // filter the correct guess and thier attributes
    let character = this.characteristic.filter(entry => entry[0] === this.character)
    // check if guess is correct
    if (guess === this.character) {
        return [`Correct! in ${this.turns} turns`]
    }
    // check if correct guess includes computer guessed characteristics
    if (character[0][1].includes(guess)) {
        let guessList = this.characteristic.filter(name => name[1].includes(guess))
        let possList = guessList.map(name => name[0])
        this.characteristic = guessList
        // return possibilities list
        return possList
    } else {
        // check if computer guess is name
        if (guess !== this.character) {
            let nameList = this.characteristic.map(entry => entry[0]);
            if (nameList.includes(guess)) {
                // return name list 
                return nameList.filter(name => name !== guess)
            } else {
                // check if correct guess does NOT includes computer guessed characteristics
                let guessList = this.characteristic.filter(name => !name[1].includes(guess))
                let possList = guessList.map(name => name[0])
                this.characteristic = guessList
                return possList
            }
        }
    }
};
