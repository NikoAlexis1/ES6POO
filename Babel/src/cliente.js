export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = function () {
            return impuesto || [];
        };
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    calcularImpuesto(montobrutoanual, deducciones) {
        return (montobrutoanual - deducciones) * 21/100;
    }

}

