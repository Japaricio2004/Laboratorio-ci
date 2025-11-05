const { verificarLimite } = require('./funcionGrupo1');

test('Debe rechazar pedidos mayores a S/5000', () => {
 const productos = [{ precio: 1200, cantidad: 5 }];
 expect(verificarLimite(productos, 0)).toBe('Error: el pedido supera el límite permitido');
});

test('Debe aceptar pedidos dentro del límite', () => {
 const productos = [{ precio: 1000, cantidad: 3 }];
 expect(verificarLimite(productos, 0)).toBe(3000);
});
