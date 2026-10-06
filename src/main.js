import './style.css';
import { createHeader } from './components/header';
import { createScore } from './components/score';
import { createGameBoard } from './components/game-board';
import { createModal } from './components/modal';
import { createVictoryContent } from './components/victory-modal';

const app = document.createElement('div');
app.className = 'app';
document.body.append(app);

const header = createHeader();
app.append(header);

const score = createScore();
app.append(score);

function handleGameComplete(moves) {
  const victoryContent = createVictoryContent(moves);
  modal.setContent(victoryContent);
  modal.openModal();
}

const gameBoard = createGameBoard(handleGameComplete);
app.append(gameBoard);

const modal = createModal();
