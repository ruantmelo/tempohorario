import Icons from '../Icons.js'

export class ClimaView {
    constructor(elemento) {
        this._elemento = elemento
    }

    template(clima) {

        let { cidade, estado, tempo, tempo_desc, temperatura, umidade, vento_int, atualizacao, periodo } = clima

        if (periodo === '--') {
            periodo = 'manha'
        }
        return `
        <div class="weather-description">
            <i class="fas fa-${Icons[periodo][tempo]} weather-icon"></i>
            <span class="weather-text">${tempo_desc}</span>
        </div>

        <div class="location-temp">
            <span class='city'>${cidade}</span>
            <span class='state'>${estado}</span>
            <span class='temperature'>${temperatura}º</span>
        </div>
        <table class='more-information'>
            <tr>
                <th>Umidade:</th>
                <td>${umidade}%</td>
            </tr>
            <tr>
                <th>Vento:</th>
                <td>${vento_int} km/h</td>
            </tr>
            <tfoot>
                <tr>
                    <td colspan="2">Atualizado às ${atualizacao} </td>
                </tr>
            </tfoot>
        </table>
   `}
    //    <th>Data e Hora Local:</th>
    //    <td> 20/03/2020 17:30h</td>
    update(clima) {
        this._elemento.innerHTML = this.template(clima);
        if (clima.periodo == '--' || clima.tempo == '--') return ''

        // this._elemento.classList = ['weather-container', `${clima.periodo}`]
        this._elemento.className = `weather-container ${clima.periodo}`
    }
}