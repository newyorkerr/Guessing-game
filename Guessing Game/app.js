function guessNumber() {
    let playerguess;
    const numberToGuess = Math.ceil(Math.random() * 10);

prompt("Devinez le nombre mistère entre 1 et 10");

while(playerguess != numberToGuess) {
    playerguess = prompt("Essayer de deviner le nombre enter 1 et 10");
}

alert(`Bravo , le nombre était ${numberToGuess}!`);
}



guessNumber();