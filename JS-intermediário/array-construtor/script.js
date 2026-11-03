// é possível criar array com um construtor no JS
const newArray = new Array()
console.log(newArray)

// array = []
// objeto = {}

// é possível passar argumentos no construtor para criar uma array com elementos
const newArray1 = new Array(1, 2, "oi", 3.2)
console.log(newArray1)

// lenght, igualmente como numa string, é uma propriedade de um array
console.log(newArray1.length)

// pode ser passado como argumento um único numero inteiro, que determina o tamanho daquela array na instanciação
const emptyLengthyArray = new Array(10)
console.log(emptyLengthyArray)
console.log(emptyLengthyArray.length)
