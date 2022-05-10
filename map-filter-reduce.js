/* Exercicios para praticar Map, Filter e Reduce*/

/************** MAP **************/
/* Praticar a sintaxe da multiplicacao de numeros usando o parametro 'this' de um objeto*/


const gato = {
    value:2,
}

const peixe = {
    value: 3,
}
function mapUsandoThis (array, thisArg) {
    return array.map(function(item){
       return item * this.value;
    }, thisArg);
}

const nums = [1,2,3,4];
console.log('this --> gato', mapUsandoThis(nums, gato));

console.log('this --> peixe', mapUsandoThis(nums, peixe));


/* Usando MAP sem usar o 'this'*/
function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    })
}
const numbers = [1, 2, 3,4, 5];

console.log(mapSemThis(numbers));

/* Usando FILTER para retornar todos os números pares de um array */
function filterPares(array) {
    return array.filter(callback);
 }

function callback(item){
    return item % 2 === 0;
}

console.log(filterPares(numbers));

/*Usando o método REDUCE para sonmar todos os números de um array*/

function somaNumeros(array){
   return array.reduce(function(prev, current){
        return prev + current;
    })
}

console.log(somaNumeros(numbers));
/*Usando o método REDUCE para descontar do saldo disponível os preços de uma lista de compras*/

const lista =[
    {
        item: 'arroz',
        preco: 17.98,
    },
    {
        item: 'óleo de soja',
        preco: 8.99,
    },
    {
        item: 'filé de frango',
        preco: 21.99,
    }
];

const saldoDisponivel = 150;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
}
console.log(calculaSaldo(saldoDisponivel, lista));
