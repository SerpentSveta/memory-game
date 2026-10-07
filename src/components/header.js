export function createHeader(onNewGame, onLeaderboard) {
  const header = document.createElement('header');
  header.className = 'header';

  const title = document.createElement('h1');
  title.textContent = 'Memória';
  title.className = 'header__title';

  header.append(title);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button__container';

  header.append(buttonContainer);

  const newGame = document.createElement('button');
  newGame.type = 'button';
  newGame.textContent = 'New Game';
  newGame.className = 'header__button header__button--new-game';

  newGame.addEventListener('click', onNewGame);

  const leaderboard = document.createElement('button');
  leaderboard.type = 'button';
  leaderboard.textContent = 'Leaderboard';
  leaderboard.className = 'header__button header__button--leaderboard';

  buttonContainer.append(newGame, leaderboard);

  leaderboard.addEventListener('click', onLeaderboard);

  return header;
}
