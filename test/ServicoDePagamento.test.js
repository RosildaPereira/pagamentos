const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', function () {
  it('deve armazenar pagamento com categoria cara quando valor for maior que 100', function () {
    const servico = new ServicoDePagamento();
    servico.pagar('0321-4521-9632', 'Samar', 153.42);

    const ultimo = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimo, {
      codigoBarras: '0321-4521-9632',
      empresa: 'Samar',
      valor: 153.42,
      categoria: 'cara',
    });
  });

  it('deve armazenar pagamento com categoria padrão quando valor for menor ou igual a 100', function () {
    const servico = new ServicoDePagamento();
    servico.pagar('1234-5678-9012', 'Loja X', 100.0);

    const ultimo = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimo, {
      codigoBarras: '1234-5678-9012',
      empresa: 'Loja X',
      valor: 100.0,
      categoria: 'padrão',
    });
  });

  it('deve retornar somente o último pagamento registrado', function () {
    const servico = new ServicoDePagamento();
    servico.pagar('1111-2222-3333', 'A', 50.0);
    servico.pagar('4444-5555-6666', 'B', 200.0);

    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo.codigoBarras, '4444-5555-6666');
    assert.strictEqual(ultimo.empresa, 'B');
    assert.strictEqual(ultimo.valor, 200.0);
    assert.strictEqual(ultimo.categoria, 'cara');
  });
});
