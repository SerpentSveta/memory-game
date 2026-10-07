# RSSchool Memory Game

Educational project for Rolling Scopes School.

## About the project

Memory Game is a browser game where the player needs to find all matching pairs of cards.

The game contains 16 cards with 8 different images. Cards are shuffled every time a new game starts. The number of moves and found pairs is displayed during the game.

After completing the game, the result is saved to `localStorage` and can be viewed in the Leader Board. Up to 10 best results are stored.

## Features

* 16 cards / 8 matching pairs
* Random card shuffling
* Move counter and pairs counter
* Automatic closing of non-matching cards
* New Game button
* Victory modal with the final result
* Leader Board with the 10 best results
* Results saved in `localStorage`
* Modal windows can be closed with a button, overlay click, or `Escape`
* Responsive layout

## Technologies

* HTML5
* CSS3
* JavaScript
* Vite
* LocalStorage

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/SerpentSveta/memory-game.git
```

Go to the project directory:

```bash
cd memory-game
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### Build

To create a production build:

```bash
npm run build
```

## Deployment

The deployed application is available on GitHub Pages:

https://serpentsveta.github.io/memory-game/
