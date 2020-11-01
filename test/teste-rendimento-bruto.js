const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Rendimento bruto', function() {
  describe('getRendimentoBruto()', function() {
    it('Deve retornar 13.15', function() {
      const aplicacaoCdb = new Cdb;
      aplicacaoCdb.setAplicacaoInicial(500.00);
      aplicacaoCdb.setDias(120);
      assert.equal(aplicacaoCdb.getRendimentoBruto(), 13.15);
    });
  });
});