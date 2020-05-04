export class Tempo {

    constructor() {

        this.cidade = '--';
        this.estado = '--';
        this.descricao = '--'
        this.icone = '--'
        this.temperatura = '--';
        this.pressao = '--';
        this.umidade = '--';
        this.vento = {
            velocidade: '--',
            graus: '--'
        }
        this.dt = '--';


        this.periodo = '--'




    }

    change({ cidade, estado, descricao, icone, temperatura, pressao, umidade, vento, dt, periodo }) {
        this.cidade = cidade;
        this.estado = estado;
        this.descricao = descricao;
        this.icone = icone;
        this.temperatura = temperatura;
        this.pressao = pressao;
        this.umidade = umidade;
        this.vento = vento
        this.dt = dt;
        this.periodo = periodo;




    }

}


