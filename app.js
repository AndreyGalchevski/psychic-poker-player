// Main program which calls I/O methods to read from input file and write to output file
// Here also live global variables which hold the application data (input hands, input decks and best hands)
// The action starts when the function game.play is called which calculates the best hand given the input

const io = require("./io");
const game = require("./game");

const inputFile = "./input/input.txt";
const outputFile = "./output/output.txt";

let hands = [];
let decks = [];
let bestHands = [];

io.processInput(inputFile, hands, decks);

for (let i = 0; i < hands.length; i++) {
  bestHands.push(game.play(hands[i], decks[i]));
}

io.processOutput(outputFile, hands, decks, bestHands);
