const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Rendimento bruto', function() {
  describe('getRendimentoBruto()', function() {
    it('Deve retornar 13.15', function() {
      const aplicacaoCdb = new Cdb(8);
      aplicacaoCdb.setAplicacaoInicial(500.00);
      aplicacaoCdb.setDias(120);
      assert.equal(aplicacaoCdb.getRendimentoBruto(), 13.15);
    });

    it('Deve retornar 23.01', function() {
      const aplicacaoCdb = new Cdb(8);
      aplicacaoCdb.setAplicacaoInicial(250.00);
      aplicacaoCdb.setDias(420);
      assert.equal(aplicacaoCdb.getRendimentoBruto(), 23.01);
    });
  });
});