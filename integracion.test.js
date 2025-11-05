const { calcularTotalPedido } = require('./pedido');
const { verificarLimite } = require('./funcionGrupo1');

test('Integración calcularTotalPedido + verificarLimite', () => {
 const productos = [{ precio: 1000, cantidad: 4 }];
 const totalBase = calcularTotalPedido(productos, 10);
 const resultadoFinal = verificarLimite(productos, 10);
 expect(resultadoFinal).toBe(totalBase);
});
