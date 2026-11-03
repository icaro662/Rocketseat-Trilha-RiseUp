// podemos remover/adicionar elementos com push() e pop()
let users = []

users.push("eu")
users.push("voce")
users.push("tu")

// o metodo push() recebe x argumentos representandos novos elementos, e adiciona-os ao final da array
console.log(users)

users.unshift("nos")
users.unshift("eles")
users.unshift("deles")

// do contrario, unshift() adiciona-os ao começo da array
console.log(users)

// shift() remove o elemento no índice inicial
users.shift()
console.log(users)

// enquanto pop() remove o elemento no índice final
users.pop()
console.log(users)
