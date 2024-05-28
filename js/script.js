let monto = parseInt(prompt ("Ingrese el monto de su prestamo"));

while (monto <= 0 || Number.isNaN(monto)){
    monto  = parseInt(prompt ("El monto ingresado es invalido. Ingreselo nuevamente."));
}

let cuotas = parseInt(prompt ("En cuantas cuotas pagaria el prestamo?"));

while (cuotas <=0 || Number.isNaN(cuotas)){
    cuotas  = parseInt(prompt ("La cantidad de cuotas ingresada es invalido. Ingresela nuevamente"));
}

function calcularInteresMensual(interesAnual){
    return interesAnual / (12 * 100)
}

function calcularCuotaMensual(montoPrestamo, interesMensual, cuotaPrestamo) {
    return (montoPrestamo * interesMensual * ((1 + interesMensual) ** cuotaPrestamo)) / (((1 + interesMensual) ** cuotaPrestamo) - 1);
}

function calcularMontoFinal(cuotaMensual, cuotaPrestamo){
    return cuotaMensual * cuotaPrestamo
}

const INTERES_ANUAL = 50
const INTERES_MENSUAL = calcularInteresMensual(INTERES_ANUAL)
const CUOTA_MENSUAL = calcularCuotaMensual(monto,INTERES_MENSUAL,cuotas)
const MONTO_FINAL = calcularMontoFinal(CUOTA_MENSUAL,cuotas)


alert ("La cuota mensual es de $" + CUOTA_MENSUAL.toFixed(2) + "\nEl monto total es de $" + MONTO_FINAL.toFixed(2))