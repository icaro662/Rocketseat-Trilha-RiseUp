//Hoisting - var é declarado depois, porém pode ser chamada antes de sua declaração, mas terá o valor 'undefined'.
// console.log(user)
// var user = "Icaro"

// escopo global 
var email = "icarosancho@gmail.com"


// escopo de bloco
{
    console.log(email)
}

// declarado em escopo de bloco...
{
    var age = 18
}

//...e sendo possível ser chamado fora do escopo, pois var possue escopo global. 
console.log(age)