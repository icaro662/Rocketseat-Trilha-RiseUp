//os operadores de incremento e decremento somam ou diminuem o valor da variável com 1

let number = 1;

// incrementamos o valor de number
number++

// 2
console.log(number)

// dependendo da posição do operador, antes ou depois da variável selecionada, a execucão da operação ajusta de acordo

// executa como uma "declaração" da operação, sendo assim o valor ainda não foi alterado imediatamente
console.log(number++)

// agora verificamos após declaração da operação
console.log(number)

// porém se pusemos o operador antes da variável, a operação é imediata
console.log(--number)

// diferente de após, onde a ordem é após a declaração da operação
console.log(number++)

console.log(number)

// além do operadores ++/--,  é possível incrementar um valor arbitrário
number = 1;

// Esta operação significa number é igual number + 10, ou seja, onde number = 1, 
// temos number = 1 + 10
number += 10;

console.log(number)

