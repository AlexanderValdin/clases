import Cliente from './cliente.js';

let cliente = new Cliente();
cliente.monto_bruto_anual = 5000;
cliente.deducciones = 3000;
console.log(cliente.calcularImpuestos());
