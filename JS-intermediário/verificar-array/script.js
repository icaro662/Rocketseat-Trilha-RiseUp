let arr = ["1", 1, "maçã", "apple"]
let object = {}
let emptyArr = []

// procurar se um elemento é encontrado numa array. retorna booleano
console.log(arr.includes("1"))

const searchArr = (arr, string) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return console.log("array not found or empty")
  } else if (arr.includes(string)) {
    return console.log(arr.indexOf(string))
  } else {
    return console.log(`couldnt find '${string}' in specified array`)
  }
}

searchArr(arr, "appl")
