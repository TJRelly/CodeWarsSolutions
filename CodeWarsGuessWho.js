// Solution to Code Wars Guess Who

function GuessWho(character) {
    // Create an attribute to track correct guess
    this.character = character
    // Create an attribute to track turns
    this.turns = 0
    this.characteristic = [["Jean-Claude", ["Male", "Glasses", "Brown eyes", "Bald", "White hair", "Small mouth", "Small nose"]],
    ["Pierre", ["Male", "Mustache", "Brown eyes", "Brown hair", "Big mouth", "Small nose"]],
    ["Jean", ["Male", "White hair", "Big nose", "Big mouth", "Blue eyes"]],
    ["Amelie", ["Female", "Hat", "Brown hair", "Small mouth", "Long hair", "Brown eyes", "Small nose"]],
    ["Mirabelle", ["Female", "Black hair", "Earrings", "Small mouth", "Brown eyes", "Big nose"]],
    ["Isabelle", ["Female", "Blonde hair", "Glasses", "Hat", "Small mouth", "Small nose", "Brown eyes"]],
    ["Antonin", ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"]],
    ["Bernard", ["Male", "Brown eyes", "Brown hair", "Small nose", "Hat"]],
    ["Owen", ["Male", "Blue eyes", "Blonde hair", "Small nose", "Small mouth"]],
    ["Dylan", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Small mouth", "Bald", "Beard"]],
    ["Herbert", ["Male", "Brown eyes", "Blonde hair", "Big nose", "Small mouth", "Bald"]],
    ["Christine", ["Female", "Blue eyes", "Blonde hair", "Small nose", "Small mouth", "Long hair"]],
    ["Luc", ["Male", "Brown eyes", "White hair", "Small nose", "Small mouth", "Glasses"]],
    ["Cecilian", ["Male", "Brown eyes", "Ginger hair", "Small nose", "Small mouth"]],
    ["Lionel", ["Male", "Brown eyes", "Brown hair", "Big nose", "Big mouth", "Mustache"]],
    ["Benoit", ["Male", "Brown eyes", "Brown hair", "Small mouth", "Small nose", "Mustache", "Beard"]],
    ["Robert", ["Male", "Blue eyes", "Brown hair", "Big nose", "Big mouth"]],
    ["Charline", ["Female", "Brown hair", "White hair", "Small nose", "Big mouth"]],
    ["Renaud", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Mustache"]],
    ["Michel", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Beard"]],
    ["Pierre-Louis", ["Male", "Blue eyes", "Brown hair", "Small nose", "Small mouth", "Bald", "Glasses"]],
    ["Etienne", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Small mouth", "Glasses"]],
    ["Henri", ["Male", "Brown eyes", "White hair", "Small nose", "Big mouth", "Hat"]],
    ["Damien", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Hat"]]];
}

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
