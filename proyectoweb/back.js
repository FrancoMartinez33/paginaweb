function agregarNota() {
    const input = document.getElementById('inputNota');
    const texto = input.value.trim();
    if (texto === '') return;
    const lista = document.getElementById('listaNotas');
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    input.value = '';
}
