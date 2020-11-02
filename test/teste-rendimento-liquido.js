const assert = require('assert');
const Cdb = require('../src/models/cdb.js')

describe('Rendimento Liquido', function() {
  describe('getRendimentoLiquido()', function() {
    it('Deve retornar 4.7342', function() {
      const aplicacaoCdb = new Cdb(9);
      aplicacaoCdb.setAplicacaoInicial(3000.00);
      aplicacaoCdb.setDias(240);
      assert.equal(aplicacaoCdb.getRendimentoLiquido(), 4.7342);
    });


  });
});
