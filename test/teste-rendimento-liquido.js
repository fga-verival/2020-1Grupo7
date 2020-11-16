const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Rendimento Liquido', function() {
  describe('getRendimentoLiquido()', function() {
    it('Deve retornar 4.73', function() {
      const aplicacaoCdb = new Cdb(9);
      aplicacaoCdb.setAplicacaoInicial(3000.00);
      aplicacaoCdb.setDias(240);
      assert.equal(aplicacaoCdb.getRendimentoLiquido(), 4.73);
    });

    it('Deve retornar 14.24', function () {
      const aplicacaoCdb = new Cdb(9);
      aplicacaoCdb.setAplicacaoInicial(2500.00);
      aplicacaoCdb.setDias(700);
      assert.equal(aplicacaoCdb.getRendimentoLiquido(), 14.24)
    });

    it('Deve retornar 17.47', function () {
      const aplicacaoCdb = new Cdb(7.5);
      aplicacaoCdb.setAplicacaoInicial(100.00);
      aplicacaoCdb.setDias(1000);
      assert.equal(aplicacaoCdb.getRendimentoLiquido(), 17.47)
    });

  });
});
