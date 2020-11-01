const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Imposto de Renda', function() {
  describe('getImpostoDeRenda()', function() {
    it('Deve retornar 3.14', function() {
      const aplicacaoCdb = new Cdb(8.5);
      aplicacaoCdb.setAplicacaoInicial(1000.00);
      aplicacaoCdb.setDias(60);
      aplicacaoCdb.setAliquota(22.5)
      assert.equal(aplicacaoCdb.getImpostoDeRenda(), 3.14);
    });

    it('Deve retornar 147.58', function() {
      const aplicacaoCdb = new Cdb(9.5);
      aplicacaoCdb.setAplicacaoInicial(4200.00);
      aplicacaoCdb.setDias(900);
      aplicacaoCdb.setAliquota(15.0)
      assert.equal(aplicacaoCdb.getImpostoDeRenda(), 147.58);
    });

  });
});