// I/O functionality needed to read and write to input and outfile respectively

const fs = require("fs");

const processInput = (filePath, hands, decks) => {
  let rawInput;

  try {
    rawInput = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.log("Error during reading input");
  }
  // Split the raw input into separate lines trimmed at the end
  let inputLines = rawInput.split("\n").map(value => value.trimEnd());

  // Initialize hands array by taking the first 5 elements (14 characters = 5*card symbol + 4*spaces between)
  inputLines.map(value => hands.push(value.slice(0, 14).split(" ")));

  // Initialize decks array by taking the second 5 elements (14 characters = 5*card symbol + 4*spaces between)
  inputLines.map(value => decks.push(value.slice(15, 29).split(" ")));
};

const processOutput = (filePath, hands, decks, bestHands) => {
  fs.truncateSync(filePath);
  for (let i = 0; i < hands.length; i++) {
    fs.appendFileSync(
      filePath,
      `Hand: ${hands[i].join(" ")} Deck: ${decks[i].join(" ")} Best hand: ${
        bestHands[i]
      }\n`
    );
  }
};

module.exports = {
  processInput,
  processOutput
};
