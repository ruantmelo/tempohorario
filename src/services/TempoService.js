import { Tempo } from "../models/Tempo.js";
import Codigos from '../Codigos.js'


export class TempoService {

    constructor() {
        this._url = (code) => `http://api.openweathermap.org/data/2.5/weather?id=${code}&appid=${APP_ID}&units=metric&lang=pt_br`;
    }

    // index() {

    //     return (new Promise((resolve, reject) => {

    //         let xhr = new XMLHttpRequest()

    //         xhr.open('GET', this._url)

    //         xhr.onreadystatechange = () => {
    //             if (xhr.readyState === 4) {
    //                 if (xhr.status === 200) {
    //                     var tempos = this._json.parse(xhr.response).tempos.metar
    //                     resolve(tempos)
    //                 } else {
    //                     throw new Error(xhr.responseText);
    //                 }
    //             }
    //         }
    //         xhr.send()
    //     })) //.then((climas) => climas)

    // }

    get(code = '3469058') {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()

            xhr.open('GET', this._url(code))

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {

                        const response = JSON.parse(xhr.response)

                        const hora = new Date().getHours();
                        let periodo;

                        if (hora >= 18 || hora < 5) {
                            periodo = 'noite'
                        }

                        else if (hora < 18 && hora >= 13) {
                            periodo = 'tarde'
                        } else {
                            periodo = 'manha'
                        }
                        // const tempo = {
                        //     cidade: Codigos[code].cidade,
                        //     estado: Codigos[code].estado,
                        //     response.weather[0].description,
                        //     response.weather[0].icon,
                        //     response.main.temp,
                        //     response.main.pressure,
                        //     response.main.humidity,
                        //     response.wind.speed,
                        //     response.wind.deg,
                        //     new Date(response.dt),
                        //     periodo
                        // }

                        console.log(response)
                        resolve({
                            cidade: Codigos[code].cidade,
                            estado: Codigos[code].estado,
                            descricao: response.weather[0].description,
                            icone: response.weather[0].icon,
                            temperatura: response.main.temp,
                            pressao: response.main.pressure,
                            umidade: response.main.humidity,
                            vento: response.wind.speed,
                            dt: new Date(response.dt),
                            periodo,
                        }


                        )

                    } else {
                        throw new Error('Não foi possível ter acesso à API');
                    }

                }
            }

            xhr.send()
        })

    }

}



// codigo: "SBBR"
                        // atualizacao: "23/03/2020 14:00:00"
                        // pressao: 1018
                        // temperatura: 24
                        // tempo: "c"
                        // tempo_desc: "Chuvas periódicas"
                        // umidade: 81
                        // vento_dir: 150
                        // vento_int: 9
                        // intensidade: ">10000
                        // { cidade, estado, temperatura, horaLocal, umidade, vento, atualizacao, tempo_desc }