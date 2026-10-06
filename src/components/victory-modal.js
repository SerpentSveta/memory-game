export function createVictoryContent(moves) {
  const victoryModal = document.createElement('div');
  victoryModal.className = 'victory-modal';

  const victoryTitle = document.createElement('h2');
  victoryTitle.className = 'victory-title';
  victoryTitle.textContent = 'You win!';
  victoryModal.append(victoryTitle);

  const victoryMoves = document.createElement('p');
  victoryMoves.className = 'victory__moves';
  victoryMoves.textContent = `Moves: ${moves}`;
  victoryModal.append(victoryMoves);

  const victoryButton = document.createElement('button');
  victoryButton.className = 'victory__button button';
  victoryButton.type = 'button';
  victoryButton.textContent = 'New Game';
  victoryModal.append(victoryButton);

  return victoryModal;
}
