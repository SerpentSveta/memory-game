export function createScore() {
  const scoreWrapper = document.createElement('div');
  scoreWrapper.classList = 'score__wrapper';

  const scoreMoves = document.createElement('div');
  scoreMoves.classList = 'score__item';
  scoreWrapper.append(scoreMoves);

  const scoreLabelMoves = document.createElement('span');
  scoreLabelMoves.textContent = 'Moves:';
  scoreLabelMoves.classList = 'score__label score__label--moves';
  scoreMoves.append(scoreLabelMoves);

  const scoreValueMoves = document.createElement('span');
  scoreValueMoves.textContent = '0';
  scoreValueMoves.classList = 'score__value score__value--moves';
  scoreMoves.append(scoreValueMoves);

  const scorePairs = document.createElement('div');
  scorePairs.classList = 'score__item';
  scoreWrapper.append(scorePairs);

  const scoreLabelPairs = document.createElement('span');
  scoreLabelPairs.textContent = 'Pairs:';
  scoreLabelPairs.classList = 'score__label score__label--pairs';
  scorePairs.append(scoreLabelPairs);

  const scoreValuePairs = document.createElement('span');
  scoreValuePairs.textContent = '0/8';
  scoreValuePairs.classList = 'score__value score__value--pairs';
  scorePairs.append(scoreValuePairs);

  return scoreWrapper;
}
