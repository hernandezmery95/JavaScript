
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
        const { cuotaMensual, montoFinal } = this
        return "La cuota mensual es de $" + cuotaMensual.toFixed(2) + "\nEl monto total es de $" + montoFinal.toFixed(2);
    }
}

const INTERES_ANUAL = 50

function calcularInteresMensual(interesAnual) {
    return interesAnual / (12 * 100)
}

function calcularCuotaMensual(montoPrestamo, interesMensual, cuotaPrestamo) {
    return (montoPrestamo * interesMensual * ((1 + interesMensual) ** cuotaPrestamo)) / (((1 + interesMensual) ** cuotaPrestamo) - 1);
}

function calcularMontoFinal(cuotaMensual, cuotaPrestamo) {
    return cuotaMensual * cuotaPrestamo
}

const main = document.getElementById("mainIndex");
const container = document.createElement('div');
const sectionTitle = document.createElement('h3');
const form = document.createElement('form');

container.style.display = "flex";
container.style.flexDirection = "row";
container.style.gap = "24px";
container.id = "container"

main.appendChild(container);
form.appendChild(sectionTitle);
container.appendChild(form);

const historial = document.createElement("div")
historial.style.display = "flex"
historial.style.flexDirection = "column"
historial.style.gap = "8px"
historial.style.marginTop = "32px"
container.appendChild(historial)

sectionTitle.textContent = "Cotiza tu prestamo"
sectionTitle.style.marginTop = '16px'

const inputs = [
    {
        label: "Ingrese el monto de su prestamo:",
        id: "input-monto"
    },
    {
        label: "Ingrese la cantidad de cuotas:",
        id: "input-cuotas"
    },
]

for (const input of inputs) {
    const inputElement = document.createElement("input")
    const p = document.createElement("p")
    inputElement.id = input.id
    p.textContent = input.label
    form.appendChild(p)
    form.appendChild(inputElement)
}

const button = document.createElement("button");
button.textContent = "Cotizar";
button.style.display = 'block';
button.style.backgroundColor = '#ede4db';
button.style.padding = '6px';
button.style.fontSize = '1.2rem';
button.style.marginBottom = '1rem';
form.appendChild(button)

button.onclick = () => {
    button.style.backgroundColor = '#ccbaaa';
    button.style.color = 'black';
}

form.style.marginTop = '16px'
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.gap = '16px'
form.style.width = '400px'

function mostrarHistorial() {
    historial.innerHTML = ""
    const prestamos = JSON.parse(localStorage.getItem("prestamos"))
    if (prestamos && prestamos.length) {
        const tituloHistorial = document.createElement("h4")
        tituloHistorial.textContent = "Historial de prestamos"
        historial.appendChild(tituloHistorial)
        for (let i = 0; i <= prestamos.length; i++) {
            const prestamo = prestamos[i]
            if (prestamo) {
                const prestamoObj = new Prestamo(prestamo.monto, prestamo.cuotas, INTERES_ANUAL)
                const div = document.createElement("div")
                const h5 = document.createElement("h5")
                h5.textContent = "Prestamo " + (i + 1)
                const p = document.createElement("p")
                p.textContent = prestamoObj.mostrarDetalles()
                div.appendChild(h5)
                div.appendChild(p)
                historial.appendChild(div)
            }
        }

        const botonBorrarHistorial = document.createElement("button")
        botonBorrarHistorial.textContent = "Borrar historial"
        botonBorrarHistorial.style.display = 'block';
        botonBorrarHistorial.style.backgroundColor = '#ede4db';
        botonBorrarHistorial.style.padding = '6px';
        botonBorrarHistorial.style.fontSize = '1.2rem';
        botonBorrarHistorial.style.marginBottom = '1rem';
        botonBorrarHistorial.onclick = () => {
            localStorage.removeItem("prestamos")
            mostrarHistorial()
        }
        historial.appendChild(botonBorrarHistorial)
    } else {
        historial.innerHTML = ""
    }
}

mostrarHistorial()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const monto = e.target.elements["input-monto"].value
    const cuotas = e.target.elements["input-cuotas"].value
    const prestamo = new Prestamo(monto, cuotas, INTERES_ANUAL);
    console.log("prestamo: ", prestamo)
    p.textContent = prestamo.mostrarDetalles()
    main.appendChild(p)
    guardarPrestamo(prestamo)
})

const p = document.createElement('p')

function guardarPrestamo(prestamo) {
    let prestamos = JSON.parse(localStorage.getItem("prestamos"))
    if (prestamos && prestamos.length) {
        prestamos.push(prestamo)
    } else {
        prestamos = [prestamo]
    }
    localStorage.setItem("prestamos", JSON.stringify(prestamos))
    mostrarHistorial()
}


