// http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml

import { XmlToJson } from "../utils/XmlToJson.es6.js";


export class CapitaisService {

    constructor() {
        this._json = new XmlToJson()
    }

    index() {

        return (new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('GET', 'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml')

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var capitais = this._json.parse(xhr.response).capitais.metar
                        resolve(capitais)
                    } else {
                        throw new Error(xhr.responseText);
                    }
                }
            }
            xhr.send()
        })) //.then((capitais) => capitais)

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
                        const capitais = this._json.parse(xhr.response).capitais.metar
                        const capital = capitais.find((value, index) => value.codigo == code)
                        resolve(capital);
                    } else {
                        throw new Error(xhr.responseText);
                    }
                }
            }
            xhr.send()
        })

    }

}



