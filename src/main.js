import './style.css';
import { createHeader } from './components/header';
import { createScore } from './components/score';
import { createGameBoard } from './components/game-board';

const app = document.createElement('div');
app.className = 'app';
document.body.append(app);

const header = createHeader();
app.append(header);

const score = createScore();
app.append(score);

const gameBoard = createGameBoard();
app.append(gameBoard);
