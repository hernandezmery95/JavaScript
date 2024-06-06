class Prestamo {
    constructor(monto, cuotas, interesAnual) {
        this.monto = monto;
        this.cuotas = cuotas;
        this.interesAnual = interesAnual;
        this.interesMensual = calcularInteresMensual(this.interesAnual)
        this.cuotaMensual = calcularCuotaMensual(monto, this.interesMensual, cuotas);
        this.montoFinal = calcularMontoFinal(this.cuotaMensual, cuotas);
    }

    mostrarDetalles() {
        return "La cuota mensual es de $" + this.cuotaMensual.toFixed(2) + "\nEl monto total es de $" + this.montoFinal.toFixed(2);
    }
}

const INTERES_ANUAL = 50

function solicitarPrestamo() {
    let monto = parseInt(prompt("Ingrese el monto de su prestamo"));

    while (monto <= 0 || Number.isNaN(monto)) {
        monto = parseInt(prompt("El monto ingresado es invalido. Ingreselo nuevamente."));
    }

    let cuotas = parseInt(prompt("En cuantas cuotas pagaria el prestamo?"));

    while (cuotas <= 0 || Number.isNaN(cuotas)) {
        cuotas = parseInt(prompt("La cantidad de cuotas ingresada es invalida. Ingresela nuevamente"));
    }

    const prestamo = new Prestamo(monto, cuotas, INTERES_ANUAL);
    return prestamo;
}

let prestamos = [];

let cantidadPrestamos = parseInt(prompt("¿Cuántos préstamos desea solicitar?"));
while (cantidadPrestamos <= 0 || Number.isNaN(cantidadPrestamos)) {
    cantidadPrestamos = parseInt(prompt("La cantidad de prestamos ingresada es invalida. Ingresela nuevamente"));
}

for (let i = 0; i < cantidadPrestamos; i++) {
    let prestamo = solicitarPrestamo();
    prestamos.push(prestamo);
    alert(prestamo.mostrarDetalles());
}

function calcularInteresMensual(interesAnual) {
    return interesAnual / (12 * 100)
}

function calcularCuotaMensual(montoPrestamo, interesMensual, cuotaPrestamo) {
    return (montoPrestamo * interesMensual * ((1 + interesMensual) ** cuotaPrestamo)) / (((1 + interesMensual) ** cuotaPrestamo) - 1);
}

function calcularMontoFinal(cuotaMensual, cuotaPrestamo) {
    return cuotaMensual * cuotaPrestamo
}



for (let i = 0; i < prestamos.length; i++) {
    console.log(`Préstamo ${i + 1}:`);
    console.log(prestamos[i].mostrarDetalles());
}