//exercício 1 - Spread operator
function Soma(numeros) {
    let arrNum = numeros.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0);
    return arrNum;
}
console.log(Soma([1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89]));

//exercicio 2 - Fetch
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
let solicitacao = fetch(url)
    .then((response) => response.json())
console.log(solicitacao);