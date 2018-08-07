// Here we define play() function which takes a hand and a deck as an input and calculates the best hand

const _ = require("lodash");
require("lodash.combinations");

const handChecker = require("./handChecker");

const pokerHands = {
  "9": "straight-flush",
  "8": "four-of-a-kind",
  "7": "full-house",
  "6": "flush",
  "5": "straight",
  "4": "three-of-a-kind",
  "3": "two-pairs",
  "2": "one-pair",
  "1": "highest-card"
};

// The function uses brute-force algorithm:
// We start with 5 cards from the given hand and 0 zero cards from the deck
// Then with 4 cards from the hand and 1 card from the deck
// And then 3 and 2 and so on
// Each iteration we compute all combinations of cards in the hand with size of 5-i (i starts from 1 )
// And to each combination of size 5-i we add i cards from the deck (to complement it to 5)
// Then for each possible hand we compute it's value and check if it's greater than the current maximum
// In the end we return the poker hand with the maximum value out of all options that have been checked
const play = (hand, deck) => {
  let bestHandValue = handChecker.checkHand(hand);
  let currentHandValue = 0;
  let currentHand = [];

  for (let i = 1; i < 5; i++) {
    possibleCombinations = _.combinations(hand, 5 - i);
    for (let j = 0; j < possibleCombinations.length; j++) {
      currentHand = possibleCombinations[j].concat(deck.slice(0, i));
      currentHandValue = handChecker.checkHand(currentHand);

      if (currentHandValue > bestHandValue) bestHandValue = currentHandValue;
    }
  }

  let deckValue = handChecker.checkHand(deck);
  if (deckValue > bestHandValue) bestHandValue = deckValue;

  return pokerHands[bestHandValue];
};

module.exports = { play };
