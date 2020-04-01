import { ClimaController } from '../src/controllers/ClimaController.js';
import '../css/style.css';
const climaController = new ClimaController()

document.querySelector('select').onchange = (e) => {
    climaController.change(e)
}