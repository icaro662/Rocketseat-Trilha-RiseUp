let fruits = ["ah", "be", "ce"]

// procura e retorna o índice com elemento == a string no recebida
let position = fruits.indexOf("ce")
console.log(position)

// corta do índice (primeiro argumento), e quantos elementos (segundo argumento) a partir dele.
// corta dois elementos a partir (e incluindo o elemento) do índice "1"
// fruits.splice(1, 2)
// console.log(fruits)

// ao achar um elemento especifico com indexOf(), e o utilizando com splice()
//  podemos cortar de um array um elemento especifico encontrado dentro dele
fruits.splice(position, 1)
console.log(fruits)
