// criando array
let fruits = ["apple", "banana", "orange"]
console.log(fruits)
console.log(fruits.length)

// podemos acessar determinado elemento em um índice especifico em um array com array[int]
// acessando o elemento no índice 1
console.log(fruits[1])

// como array.length != total de índices, acessar índice usando o tamanho do array em si retorna undefined.
console.log(fruits[fruits.length])

// para verificar o último elemento de um array dinamicamente, usasse array[array.length - 1]
// pois ultimo indice sempre é array.length - 1
console.log(fruits[fruits.length - 1])
