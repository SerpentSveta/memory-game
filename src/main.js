import frontCover2 from './assets/images/front-cover-2.jpg';

import './style.css';
import { createHeader } from './components/header';
import { createScore } from './components/score';
import { createCard } from './components/card';

const app = document.createElement('div');
app.className = 'app';
document.body.append(app);

const header = createHeader();
app.append(header);

const score = createScore();
app.append(score);

const card = createCard(frontCover2);
app.append(card);
