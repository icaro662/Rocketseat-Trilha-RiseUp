/*
Estrutura de um for loop em JS

for (i = 0) <= variavel de controle
for (i = 0; i < 10) <= condição a ser verificada. se true, continua.
for (i = 0; i < 10; i++) <= passo de incremento/decremento da variavel de controle

*/

// for (step = 0; step >= 0; step++) {
//   console.log(step)
//   if (step >= 11) {
//     return
//   }
// }

let number = 7

for (i = 1; i <= 10; i++) {
  console.log(`${number} vezes ${i} = ${number * i}`)
}
