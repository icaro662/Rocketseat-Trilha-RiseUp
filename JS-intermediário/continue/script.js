// diferente do break, o continue pausa e pula para a proxima iteração
for (i = 0; i < 10; i++) {

  // pula o console.log() onde i === 5, indo para a proxima iteração onde i === 6 e continua até condição ser falsa
  if (i === 5) {
    continue
  }

  console.log(i)
}
