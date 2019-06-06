
function $(id) {
    return document.getElementById(id);
}

function calcular() {
    var quantidade = $('quantidade').value;
    var dias = $('dias').value;

    resultado = (50 * parseFloat(quantidade) * parseFloat(dias));

    $("result").innerHTML = 'Valor total das diárias: R$' + resultado;
}