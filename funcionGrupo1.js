const { calcularTotalPedido } = require('./pedido');
function verificarLimite(productos, descuento) {
 const total = calcularTotalPedido(productos, descuento);
 if (typeof total === 'string') return total;
 if (total > 5000) return 'Error: el pedido supera el límite permitido';
 return total;
}
module.exports = { verificarLimite };
