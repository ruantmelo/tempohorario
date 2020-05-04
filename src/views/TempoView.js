export class TempoView {
    constructor(elemento) {
        this._elemento = elemento
    }

    template(tempo) {
        let { cidade, estado, descricao, icone, temperatura, pressao, umidade, vento, dt, periodo } = tempo

        if (icone === '--') {
            icone = '01d'
        }
        return `
        <div class="weather-description">
            <img src="http://openweathermap.org/img/wn/${icone}@2x.png" class = "weather-icon" alt="">
            <span class="weather-text">${descricao}</span>
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
                <td>${vento} km/h </td>
            </tr>

            <tr>
                <th>Pressão:</th>
                <td>${pressao} hPa </td>
            </tr>

            <tfoot>
                <tr>
                    <td colspan="2">Atualizado às ${dt} </td>
                </tr>
            </tfoot>
        </table>`
    }
    //    <th>Data e Hora Local:</th>
    //    <td> 20/03/2020 17:30h</td>
    update(tempo) {
        this._elemento.innerHTML = this.template(tempo);

        this._elemento.className = `weather-container ${tempo.periodo}`
    }



}