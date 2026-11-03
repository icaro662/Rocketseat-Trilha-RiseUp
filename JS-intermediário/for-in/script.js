// o loop for in é um loop que permite verificar propriedades/valores de um objeto determinado
/*
for (let properties in object)

itera pela quantidade de x de properties que o object tem
*/

let person = {
  name: "Icaro",
  surName: "Sancho",
  email: "icarosancho@gmail.com",
  oneMoreTime: 1,
  oneMore: 2,
  lastOne: 3
}

for (let props in person) {
  // exibe nome da propriedade
  console.log(props)

  // exibe os valores das propriedades
  console.log(person[props])
}

// usando for in numa array, a variavel retorna o índice (obs: em strings)
let students = ["icaro", "penelope", "joseane"]

for (let estudante in students) {

  // exibe o índice da iteração
  console.log(estudante)

  // exibe elemento correspondente ao índice (da variavel "estudante")
  // (ps: para arrays, sempre pôr variavel nomeada como "index" ou o singular do nome da array,
  // ja que array são uma coleção de algo. qualquer outro nome pode causar confusão) da iteração no students)
  console.log(students[estudante])
}
