import { TempoController } from './controllers/TempoController.js';
import '../css/style.css';
const tempoController = new TempoController()

document.querySelector('select').onchange = (e) => {
    console.log(e)
    tempoController.change(e)
}