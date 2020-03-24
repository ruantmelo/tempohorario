// http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml

import { XmlToJson } from "../utils/XmlToJson.es6.js";
import { Clima } from "../models/Clima.js";
import Codigos from '../Codigos.js'


export class ClimaService {

    constructor() {
        this._json = new XmlToJson()
        // this._url = 'https://api.hgbrasil.com/weather'
    }

    index() {

        return (new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('GET', 'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml')

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var climas = this._json.parse(xhr.response).climas.metar
                        resolve(climas)
                    } else {
                        throw new Error(xhr.responseText);
                    }
                }
            }
            xhr.send()
        })) //.then((climas) => climas)

    }

    get(code) {
        if (!code) {
            throw new Error("Código não informado");
        }

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()

            xhr.open('GET', 'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml')

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const climas = this._json.parse(xhr.response).capitais.metar
                        const clima = climas.find((value, index) => value.codigo == code)
                        const { cidade, estado } = Codigos[clima.codigo]


                        const { temperatura, umidade, vento_int, atualizacao, tempo, tempo_desc } = clima
                        //cidade, estado, temperatura, horaLocal, umidade, vento, atualizacao, tempo_desc, periodo
                        const hora = new Date().getHours();
                        console.log(hora)
                        let periodo;
                        if (hora >= 18 || hora < 5) {
                            periodo = 'noite'
                            console.log('PEGUEI noite')
                        }

                        else if (hora < 18 && hora >= 13) {
                            console.log('PEGUEI tarde')
                            periodo = 'tarde'
                        } else {
                            console.log('PEGUEI manha')
                            periodo = 'manha'
                        }

                        resolve(new Clima(

                            cidade,
                            estado,
                            temperatura,
                            hora,
                            umidade,
                            vento_int,
                            atualizacao,
                            tempo,
                            tempo_desc,
                            periodo

                        ));
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