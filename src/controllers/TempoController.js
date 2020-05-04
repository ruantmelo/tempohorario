import { TempoView } from "../views/TempoView.js";
import { Bind } from "../utils/Bind.js";
import { Tempo } from '../models/Tempo.js';
import { TempoService } from "../services/TempoService.js";

export class TempoController {
    constructor() {
        this._tempoService = new TempoService()
        this._tempo = new Bind(
            new Tempo(), //cidade, estado, temperatura, horaLocal, umidade, vento, atualizacao, tempo_desc '--','--','--','--','--','--','--','--'
            new TempoView(document.querySelector('.weather-container')),
            'change')
        this._init()
    };

    _init() {
        this._tempoService.get('3469058')
            .then((tempo) => {
                this._tempo.change(tempo)
            })

    }

    change(e) {
        e.preventDefault()
        const code = e.target.value
        this._tempoService.get(code)
            .then((tempo) => {

                this._tempo.change(tempo)
            })
    }

}