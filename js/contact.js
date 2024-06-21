const main = document.getElementById("mainContact");
const container = document.createElement('div');
const sectionTitle = document.createElement('h3');
const form = document.createElement('form');
main.appendChild(container);
container.appendChild(sectionTitle);
main.appendChild(form);

sectionTitle.textContent = "Dejanos tu consulta"
sectionTitle.style.marginTop = '16px'

const inputs = [
    {
        label: "Apellido y Nombre",
        id: "input-nombre"
    },
    {
        label: "E-mail",
        id: "input-mail"
    },
    {
        label: "Dejenos su mensaje",
        id: "input-mensaje"
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

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = "Enviar";
submitButton.style.display = 'block';
submitButton.style.backgroundColor = '#ede4db';
submitButton.style.padding = '6px';
submitButton.style.fontSize = '1.2rem';

form.appendChild(submitButton);
form.style.marginTop = '16px'
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.gap = '16px'
form.style.width = '400px'