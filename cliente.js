import Impuestos from './impuestos.js';

class Cliente {
  constructor(nombre){
    this.nombre= nombre;
    const impuesto = new Impuestos();
  }


  get nombre() {
    return this._nombre;
  }
  set nombre(new_nombre) {
    this._nombre = new_nombre;
  }
  calcularImpuestos(){
    return (this.monto_bruto_anual - this.deducciones)* 0.21;
  }
}

  export default Cliente;
