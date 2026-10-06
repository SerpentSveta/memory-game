import './style.css';
import { createHeader } from './components/header';
import { createScore } from './components/score';
import { createGameBoard } from './components/game-board';
import { createModal } from './components/modal';

const app = document.createElement('div');
app.className = 'app';
document.body.append(app);

const header = createHeader();
app.append(header);

const score = createScore();
app.append(score);

function handleGameComplete(moves) {
  console.log(`Game complete! Moves: ${moves}`);
}

const gameBoard = createGameBoard(handleGameComplete);
app.append(gameBoard);


