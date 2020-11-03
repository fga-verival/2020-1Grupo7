const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Imposto de Renda', function() {
  describe('getImpostoDeRenda()', function() {
    it('Deve retornar 3.14', function() {
      const aplicacaoCdb = new Cdb(8.5);
      aplicacaoCdb.setAplicacaoInicial(1000.00);
      aplicacaoCdb.setDias(60);
      assert.equal(aplicacaoCdb.getImpostoDeRenda(), 3.14);
    });

    it('Deve retornar 147.58', function() {
      const aplicacaoCdb = new Cdb(9.5);
      aplicacaoCdb.setAplicacaoInicial(4200.00);
      aplicacaoCdb.setDias(900);
      assert.equal(aplicacaoCdb.getImpostoDeRenda(), 147.58);
    });

    it('Deve retornar 3.08', function() {
      const aplicacaoCdb = new Cdb(7.5);
      aplicacaoCdb.setAplicacaoInicial(100.00);
      aplicacaoCdb.setDias(1000);
      assert.equal(aplicacaoCdb.getImpostoDeRenda(), 3.08);
    });

  });
});
