class Cdb {
    constructor(i) { 
    	this.i = i/100;
    }

    setAplicacaoInicial(number) {
    	this.aplicacaoInicial = number;
    }

    setDias(number) {
    	this.dias = number;
    }

    getRendimentoBruto() {
        return parseFloat((this.aplicacaoInicial * this. i * this.dias/365).toFixed(2));
    }
}

module.exports = Cdb;