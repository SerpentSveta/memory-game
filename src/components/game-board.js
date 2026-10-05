import { frontImages } from '../data/images';
import { createCard } from './card';

export function createGameBoard() {
  const gameBoard = document.createElement('div');
  gameBoard.className = 'game-board';

  const cardsArray = [...frontImages, ...frontImages];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffleCards = shuffle(cardsArray);

  for (const frontImage of shuffleCards) {
    const newCard = createCard(frontImage);
    gameBoard.append(newCard);
  }

  return gameBoard;
}
