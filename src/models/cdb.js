class Cdb {
    constructor(i) {
        this.i = i / 100;
    }

    setAplicacaoInicial(number) {
        this.aplicacaoInicial = number;
    }

    setDias(number) {
			this.dias = number;
			if(number <= 180)
				this.setAliquota(22.5);
			else if(number <= 360)
				this.setAliquota(20);
			else if(number <= 720)
				this.setAliquota(17.5);
			else
				this.setAliquota(15);
    }

    setAliquota(number) {
			this.aliquota = number;
    }

    getRendimentoBruto() {
        return parseFloat((this.aplicacaoInicial * this.i * this.dias / 365).toFixed(2));
    }

    getImpostoDeRenda() {
        return parseFloat((this.getRendimentoBruto()*(this.aliquota/100)).toFixed(2));
    }

    getRendimentoLiquido() {
        return parseFloat(((((this.getRendimentoBruto() - this.getImpostoDeRenda()) + this.aplicacaoInicial) / this.aplicacaoInicial) * 100) - 100).toFixed(2);
    }
}

module.exports = Cdb;
