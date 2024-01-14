const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault ();

    adicionaLinha ();
    atualizaTabela ();
});

function adicionaLinha () {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    nomes.push(inputNome.value);
    numeros.push(inputNumero.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
