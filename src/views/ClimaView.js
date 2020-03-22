export class ClimaView {
    constructor() {
        this._template = `<div class="weather-container day">
        <div class="weather-description">
            <i class="fas fa-sun weather-icon"></i>
            <span class="weather-text">Ensolarado</span>
        </div>

        <div class="location-temp">
            <span class='city'>${cidade}</span>
            <span class='state'>${estado}</span>
            <span class='temperature'>${temperatura}º</span>
        </div>
        <table class='more-information'>
            <tr>
                <th>Data e Hora Local:</th>
                <td> 20/03/2020 17:30h</td>
            </tr>
            <tr>
                <th>Umidade:</th>
                <td>${umidade}</td>
            </tr>
            <tr>
                <th>Vento:</th>
                <td>${vento}}</td>
            </tr>
            <tfoot>
                <tr>
                    <td colspan="2">Atualizado às ${timeatualizacao} </td>
                </tr>
            </tfoot>
        </table>
    </div>`
    }

    update(clima) {

    }
}