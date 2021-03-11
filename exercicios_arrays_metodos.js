//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
var raiz = numbers.map(Math.sqrt);
console.log(raiz);


//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
var multiplica = numbers.map(item => item * 10)
console.log(multiplica);


//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];

function idades(ages) {
    return ages >= 18;
}
console.log(ages.filter(idades));


//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [{
        name: 'Butters',
        age: 3,
        type: 'dog',
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog',
    },

    {
        name: 'Red',
        age: 1,
        type: 'cat',
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog',
    },
];

let dog = (animal) => {
    return animal.type === 'dog';
}
console.log(data.filter(dog));

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
var idade = [3, 6, 3]

function DogAge(valorTotal, num) {
    return valorTotal + num;
}
console.log(idade.reduce(DogAge));
// //Parte B - Hora do Jogo!
// //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = (company) => {
    colors = company.products.shirts.colors;
    return colors.length;
};
const { colors } = getShirtsColorsAmount
console.log(colors);

// //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};
const { shirts, socks } = clothes
console.log(shirts, socks);

// //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const concat = [...arr]
concat.shift();
const concat2 = [...arr2]
concat2.shift();

console.log(concat, concat2);

// //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' }
]
let nomeCompleto = (pessoa) => {
    return pessoa.firstname + lastname;
}
console.log(persons.concat());