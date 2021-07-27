"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cliente = new _cliente["default"]();
cliente.monto_bruto_anual = 5000;
cliente.deducciones = 3000;
console.log(cliente.calcularImpuestos());