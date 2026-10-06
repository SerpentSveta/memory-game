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
const modal = createModal();

function handleGameComplete(moves, newGame) {
  const victoryContent = createVictoryContent(moves, newGame, modal.closeModal);

  modal.setContent(victoryContent);
  modal.openModal();
}

const { gameBoard, newGame } = createGameBoard(handleGameComplete);
app.append(gameBoard);
