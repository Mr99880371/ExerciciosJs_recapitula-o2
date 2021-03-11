// //Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name) => {
    return name.toUpperCase();
};
let nome = "maria"
console.log(upperName(nome));

const myFunction = (p1, p2) => {
    return p1 * p2;
}
console.log(myFunction(2, 5));

const toCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(212));