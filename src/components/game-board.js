import { frontImages } from '../data/images';
import { createCard } from './card';

export function createGameBoard() {
  const gameBoard = document.createElement('div');
  gameBoard.className = 'game-board';

  let selectedCards = [];
  let pairs = 0;
  let movies = 0;
  let isWaiting = false;
  const valueMovies = document.querySelector('.score__value--moves');
  const valuePairs = document.querySelector('.score__value--pairs');

  function handleCardClick(card) {
    if (isWaiting) {
      return false;
    }

    selectedCards.push(card);

    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      movies += 1;
      valueMovies.textContent = movies;

      if (firstCard.dataset.image === secondCard.dataset.image) {
        pairs += 1;
        valuePairs.textContent = `${pairs}/8`;
        firstCard.classList.add('card--matched');
        secondCard.classList.add('card--matched');
      } else {
        isWaiting = true;

        setTimeout(() => {
          firstCard.classList.remove('card--flipped');
          secondCard.classList.remove('card--flipped');

          isWaiting = false;
        }, 1000);
      }
      selectedCards.length = 0;
    }
    return true;
  }

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
    const newCard = createCard(frontImage, handleCardClick);
    gameBoard.append(newCard);
  }

  return gameBoard;
}
