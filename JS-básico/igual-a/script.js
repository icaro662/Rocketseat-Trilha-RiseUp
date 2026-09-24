// podemos utilizar os operadores ==, === e != para comparar os valor (e tipo) de duas variáveis
let one  = 1;
let one2 = 1;
let two  = 2;

// isto irá avaliar a um valor booleano, onde == avalia se o valor de uma variável é igual ao elemento da direita
// o valor de one é  de fato o mesmo que 1, então retorna true
console.log(one == 1)

// podemos tanto comprar uma variável a um valor literal, expressão ou outra variável
console.log(one == (2-1));
console.log(one == one2)

// podemos comparar se a variável é diferente do elemento a direita, retorna true se for de fato diferente
console.log(one != two)

// uma limitação do operador == é que não se avalia o tipo do elemento a direita, possibilitando retornos errados
// a expressão comparitiva abaixo irá retornar true, mesmo que o elemento a direita seja na verdade uma string com o número 1
console.log(one == "1")

// para isto, podemos utilizar o operador ===, que compara valor e tipo
console.log(one === "1")

// o equivalente do operador de diferença != é o operador !==. Aqui será avaliado true, pois one é diferente, tanto em valor e tipo, da string "1"
console.log(one !== "1")

// exemplo utilizando !=, que irá retornar false, pois apenas compara o valor, e não o tipo
console.log(one != "1")