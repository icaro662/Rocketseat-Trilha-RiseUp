// um array pode aceitar varios tipos de dados alem de texto e numeros
let arr = [
  "um texto",
  1,
  1.1,
  true,
  function teste() {
    console.log("uma função")
  },
  ["outro array"],
  {
    firstHalf: "até um",
    secondHalf: "objeto"
  }
]

console.log(arr[4])

// para executar função dentro de um array = array[índiceDaFunção]()
arr[4]()

// para acessar uma proprieda de um objeto dentro de um array = array[índiceDoObjeto].propriedade
console.log(arr[arr.length-1].firstHalf)
console.log(arr[arr.length-1].secondHalf)
