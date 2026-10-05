import './style.css';
import { createHeader } from './components/header';


const app = document.createElement('div');
app.className = 'app';
document.body.append(app);

const header = createHeader();
app.append(header);