export class Clima {

    constructor(cidade, estado, temperatura, horaLocal, umidade, vento_int, atualizacao, tempo, tempo_desc, periodo) {
        // if (!clima) {
        //     const { cidade, estado, temperatura, horaLocal, umidade, vento, timeatualizacao } = 
        // }
        // else {

        // }

        this.cidade = cidade || '--';
        this.estado = estado || '--';
        this.temperatura = temperatura || '--';
        this.horaLocal = horaLocal || '--';
        this.umidade = umidade || '--';
        this.vento_int = vento_int || '--';
        this.atualizacao = atualizacao || '--';
        this.tempo = tempo || '--'
        this.tempo_desc = tempo_desc || '--'
        this.periodo = periodo || '--'

    }

    change({ cidade, estado, temperatura, horaLocal, umidade, vento_int, atualizacao, tempo, tempo_desc, periodo }) {
        // const { cidade, estado, temperatura, horaLocal, umidade, vento, timeatualizacao } =
        this.cidade = cidade;
        this.tempo_desc = tempo_desc
        this.estado = estado;
        this.temperatura = temperatura;
        this.horaLocal = horaLocal;
        this.umidade = umidade;
        this.vento_int = vento_int;
        this.tempo = tempo
        this.atualizacao = atualizacao;
        this.periodo = periodo


    }

}