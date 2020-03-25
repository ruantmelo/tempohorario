import { ClimaView } from "../../views/ClimaView.js";
import { Bind } from "../utils/Bind.js";
import { Clima } from "./models/Clima.js";
import { ClimaService } from "../services/ClimaService.js";

export class ClimaController {
    constructor() {
        this._climaService = new ClimaService()
        this._clima = new Bind(
            new Clima(), //cidade, estado, temperatura, horaLocal, umidade, vento, atualizacao, tempo_desc '--','--','--','--','--','--','--','--'
            new ClimaView(document.querySelector('.weather-container')),
            'change')
        this._init()
    };

    _init() {
        this._climaService.get('SBBR')
            .then((clima) => {
                this._clima.change(clima)
            })

    }

    change(e) {
        e.preventDefault()
        const code = e.target.value
        console.log(code)
        this._climaService.get(code)
            .then((clima) => {
                this._clima.change(clima)
            })
    }

}