import backCover from '../assets/images/back-cover.jpg';

export function createCard(frontImage) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardInner = document.createElement('div');
  cardInner.className = 'card__inner';
  card.append(cardInner);

  const innerImage = document.createElement('img');
  innerImage.className = 'card__img front-cover';
  innerImage.src = frontImage;
  innerImage.alt = `Halloween`;
  cardInner.append(innerImage);

  const backImage = document.createElement('img');
  backImage.className = 'card__img back-cover';
  backImage.src = backCover;
  backImage.alt = `Scary Halloween`;
  cardInner.append(backImage);

  card.addEventListener('click', function () {
    if (!card.classList.contains('card--flipped')) {
      card.classList.add('card--flipped');
    }
  });

  return card;
}
