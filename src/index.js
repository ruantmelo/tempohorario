import { ClimaController } from '../src/controllers/ClimaController.js';

const climaController = new ClimaController()

document.querySelector('select').onchange = (e) => {
    climaController.change(e)
}