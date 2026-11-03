// diferente do loop while, o loop do while verifica apenas após o final do code block, logo permitindo que rode pelo menos uma vez
//
let value = 0

do {
  // antes de mostrar o valor inicial de value (0), é incrementando++, por isso não loga seu valor inicial
  value++
  console.log(value)
} while (value < 10)

// neste exemplo é possível visualizar o fluxo de execução de um loop do while
// como a verificação da condicional do loop (value2 < 10) é apenas no final do bloco,
// mesmo se for falsa, irá rodar pelo menos uma vez
let value2 = 11

do {
  // rodou obrigatoriamente uma vez e incrementou++. algo value2 = 12
  value2++
  console.log(value2)
} while (value2 < 10)
