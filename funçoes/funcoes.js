

// function nomeDaFuncao (parametro) {
//     //bloco de construção
// }

// função com parâmetro
// const nome = prompt("Digite seu nome")

// function cumprimentar (pessoa) {
//     alert(`Olá ${pessoa}`)
// }

// cumprimentar("Pedro")
// cumprimentar("Nayara")
// cumprimentar("João")
// cumprimentar("Alex")
// cumprimentar(nome)



//Funçoes podem receber retorno

// const numero1 = Number(prompt("Digite o primeiro número"))
// const numero2 = Number(prompt("Digite o segundo número"))



// function somar (numero1, numero2) {
//     const resultado = numero1 + numero2;
//     return resultado
// }

// somar(numero1, numero2) //soma com os valotes de dentro do prompt   

// function subtrair (a, b) {
//     const resultado = a - b
//     return resultado
// }

// console.log(subtrair(numero1, numero2))


// //arrow function

// const subtrair = (a,b) => {
//     const resultado = a - b
//     return resultado
// }

// function dizerOla (nome="Mundo") {
//     console.log("Olá, " + nome + "!");
// }

function dizerOla(nome = "Mundo") {
    console.log("Olá," + nome + "!");
}
