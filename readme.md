# Psychic Poker Player

NodeJS app which calculates the best Poker hand from the given hand of 5 cards and from the next 5 cards in the deck which were revealed by the magic psychic ability

## Getting Started

Git clone or download the repo. Install the dependencies. Place an input file in the input folder.
Run node app.js. Enjoy the magic.

## Input Format and Encoding

Sample input: TH JH QC QD QS QH KH AH 2S 6S

This means that:
Hand: TH JH QC QD QS
Deck: QH KH AH 2S 6S

The first character is the face-value (A=Ace, 2-9, T=10, J=Jack, Q=Queen, K=King) and the second character is the suit (C=Clubs, D=Diamonds, H=Hearts, S=Spades)

### Prerequisites

NodeJS should be installed on your system

### Installing

Clone or download the repo

```
git clone https://github.com/AndreyGalchevski/psychic-poker-player.git
```

Install the dependencies

```
npm install
```

## Running the tests

Replace the input.txt file in input folder with your own file (but with the sam name :) ) and run the following command in the terminal

```
node app.js
```

## Built With

- JavaScript
- NodeJS
- Lodash

## Authors

- **Andrey Galchevski**

## License

This project is licensed under the MIT License
