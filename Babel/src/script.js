import { Impuestos } from "./impuestos.js"
import { Cliente } from "./cliente.js"

let impuesto1 = new Impuestos(50000, 20000);

impuesto1.montoBrutoAnual = 80000;
impuesto1.deducciones = 10000;

let cliente1 = new Cliente("Pedro", impuesto1);

cliente1.nombre = "Raul";

console.log(`Cliente: ${cliente1.nombre}, Impuesto: ${cliente1.calcularImpuesto(impuesto1.montoBrutoAnual, impuesto1.deducciones)}`);