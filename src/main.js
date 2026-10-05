import './style.css';
import { createHeader } from './components/header';
import { createScore } from './components/score';

const app = document.createElement('div');
app.className = 'app';
document.body.append(app);

const header = createHeader();
app.append(header);

const score = createScore();
app.append(score);