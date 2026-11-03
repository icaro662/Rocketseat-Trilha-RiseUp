// podemos converter strings em array usando o metodo split()
let fullName = "Icaro Sancho"
console.log(fullName)

// separamos() a string em toda ocorrencia de " " (ou seja, espaço vazio)
console.log(fullName.split(" "))

// o array possue um metodo similar
// porem cria um array em que caracter = elementos dela
console.log(Array.from(fullName))

// array de() fullName
let fullNameArray = Array.from(fullName)

// junta todos os elementos, ou seja, os caracteres do array numa string. recebe um argumento de separador
// que especifica qual caracter irá separar cada elemento durante a junção. neste caso, o separador é nada
let fullNameString = fullNameArray.join("")
console.log(fullNameString)
