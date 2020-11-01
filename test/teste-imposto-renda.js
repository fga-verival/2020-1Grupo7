const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Imposto de Renda', function() {
  describe('getImpostoDeRenda()', function() {
    it('Deve retornar 3.14', function() {
      const aplicacaoCdb = new Cdb;
      aplicacaoCdb.setAplicacaoInicial(1000.00);
      aplicacaoCdb.setDias(60);
      aplicacaoCdb.setAliquota(22.5)
      assert.equal(aplicacaoCdb.getImpostoDeRenda(), 3.14);
    });
  });
});