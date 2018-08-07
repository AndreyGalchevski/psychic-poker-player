// Here we define helper functions to determine if the given hand is a specific poker hand

const cardValues = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
};

const checkHand = hand => {
  if (hasStraightFlush(hand)) return 9;
  if (hasFourOfAKind(hand)) return 8;
  if (hasFullHouse(hand)) return 7;
  if (hasFlush(hand)) return 6;
  if (hasStraight(hand)) return 5;
  if (hasThreeOfAKind(hand)) return 4;
  if (hasTwoPairs(hand)) return 3;
  if (hasOnePair(hand)) return 2;
  return 1;
};

const hasStraightFlush = hand => {
  if (hasStraight(hand) && hasFlush(hand)) {
    return true;
  } else {
    return false;
  }
};

const hasFourOfAKind = hand => {
  // Take only face-values of the given hand of cards
  let values = hand.map(card => card.charAt(0));
  // Counter object to count how many times a specific face-value appears in a hand
  let counter = {};

  // Calculate how many times face-values appear in a hand
  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  // Find the most frequent appearing face-value by taking only the values from the counter object
  let maxCount = Math.max(...Object.values(counter));

  if (maxCount === 4) {
    return true;
  } else {
    return false;
  }
};

const hasFullHouse = hand => {
  // Take only face-values of the given hand of cards
  let values = hand.map(card => card.charAt(0));
  // Counter object to count how many times a specific face-value appears in a hand
  let counter = {};

  // Calculate how many times face-values appear in a hand
  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  // Check if counter's values are 2 and 3
  if (
    Object.values(counter)
      .sort()
      .toString() === [2, 3].toString()
  ) {
    return true;
  } else {
    return false;
  }
};

const hasFlush = hand => {
  // Take only suits of the given hand of cards
  let suits = hand.map(card => card.charAt(1));

  // Check if all the values in suits array are the same
  if (new Set(suits).size === 1) {
    return true;
  } else {
    return false;
  }
};

const hasStraight = hand => {
  // Take only face-values of the given hand of cards
  let values = hand.map(card => card.charAt(0));
  // Counter object to count how many times a specific face-value appears in a hand
  let counter = {};

  // Calculate how many times face-values appear in a hand
  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  // Create array of ranks of the given face-values (according to the cardValues object)
  let rankedValues = values.map(value => cardValues[value]);

  let rankedDifference = Math.max(...rankedValues) - Math.min(...rankedValues);

  // Find the most frequent appearing face-value by taking only the values from the counter object
  let maxCount = Math.max(...Object.values(counter));

  // Check if
  if (rankedDifference === 4 && maxCount === 1) {
    return true;
  } // Check if the hand has 2, 3, 4, 5 and an Ace
  else if (values.sort().toString() === [2, 3, 4, 5, "A"].toString()) {
    return true;
  } else {
    return false;
  }
};

const hasThreeOfAKind = hand => {
  // Take only face-values of the given hand of cards
  let values = hand.map(card => card.charAt(0));
  // Counter object to count how many times a specific face-value appears in a hand
  let counter = {};

  // Calculate how many times face-values appear in a hand
  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  // Find the most frequent appearing face-value by taking only the values from the counter object
  let maxCount = Math.max(...Object.values(counter));

  if (maxCount === 3) {
    return true;
  } else {
    return false;
  }
};

const hasTwoPairs = hand => {
  // Take only face-values of the given hand of cards
  let values = hand.map(card => card.charAt(0));
  // Counter object to count how many times a specific face-value appears in a hand
  let counter = {};

  // Calculate how many times face-values appear in a hand
  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  // Check if counter's values are 1, 2, 2
  if (
    Object.values(counter)
      .sort()
      .toString() === [1, 2, 2].toString()
  ) {
    return true;
  } else {
    return false;
  }
};

const hasOnePair = hand => {
  // Take only face-values of the given hand of cards
  let values = hand.map(card => card.charAt(0));
  // Counter object to count how many times a specific face-value appears in a hand
  let counter = {};

  // Calculate how many times face-values appear in a hand
  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  }

  // Find the most frequent appearing face-value by taking only the values from the counter object
  let maxCount = Math.max(...Object.values(counter));

  if (maxCount === 2) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  checkHand,
  hasStraightFlush,
  hasFourOfAKind,
  hasFullHouse,
  hasFlush,
  hasStraight,
  hasThreeOfAKind,
  hasTwoPairs,
  hasOnePair
};
