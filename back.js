function agregarNota() {
    const input = document.getElementById('inputNota');
    const texto = input.value.trim();
    if (texto === '') return;
    const lista = document.getElementById('listaNotas');
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    input.value = '';
    guardarNotas();
}

function guardarNotas() {
    const lista = document.getElementById('listaNotas');
    const notas = [];
    for (const li of lista.children) {
        notas.push(li.textContent);
    }
    localStorage.setItem('notas', JSON.stringify(notas));
}

function cargarNotas() {
    const datos = localStorage.getItem('notas');
    if (!datos) return;
    const notas = JSON.parse(datos);
    const lista = document.getElementById('listaNotas');
    for (const texto of notas) {
        const li = document.createElement('li');
        li.textContent = texto;
        lista.appendChild(li);
    }
}

cargarNotas();
