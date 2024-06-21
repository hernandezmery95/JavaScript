const body = document.body
const header = document.createElement('header');
body.prepend(header)

const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = [
    {
        label: "Inicio",
        file: "index.html"
    }, 
    {
        label: "Productos",
        file: "products.html"
    },
    {
        label: "Contacto",
        file: "contact.html"
    },
]

header.appendChild(nav);
nav.appendChild(ul)

for (const link of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.file;
    a.textContent = link.label;
    li.appendChild(a);
    ul.appendChild(li);
}

