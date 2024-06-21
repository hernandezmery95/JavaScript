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
for (let i = 0; i < prestamos.length; i++) {
    console.log(`Préstamo ${i + 1}:`);
    console.log(prestamos[i].mostrarDetalles());
}

