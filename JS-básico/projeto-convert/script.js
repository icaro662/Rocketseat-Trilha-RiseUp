// Constantes do projeto. Selecionando os elementos HTML para manipulação com JS
const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const header = document.getElementById("result")

// Valores convertidos para BRL das moedas
const USD = 4.49;
const EUR = 5.58;
const GBP = 6.60;

/**
 * Formata o locale de um numero para PT-BR
 * @param {*} numero de entrada
 * @returns o numero formatado
 */
const formatBRL = (number) => {
    return Number(number).toLocaleString("pt-BR")
}

/**
 * Converte o valor de uma moeda para BRL,
 * dinamicamente altera os valores dos elementos do footer com o resultado,
 * e exibe o footer.
 * @param {number} amount - valor para conversão
 * @param {number} currency - moeda da conversão
 * @param {string} symbol -simbolo da moeda 
 */
const handleConvert = (amount, currency, symbol) => {
    try {
      // Converte o valor. amount = valor da moeda e currency = qual moeda.
      // Exibe apenas ate duas casas decimais
      let convertedAmount = (amount * currency).toFixed(2);

      // Altera os elementos com os valores calculados
      description.textContent = `${symbol} 1 = R$ ${formatBRL(currency)} `;
      header.textContent = `${formatBRL(convertedAmount)} Reais`;

      // Exibe o footer adicionando a classe com display: block;
      footer.classList.add("show-result");
    } catch (err) {
      // caso encontre um erro, remove a classe de display do footer, escondendo-o
      footer.classList.remove("show-result");
      console.log(err);
      alert("Algo inesperado ocorreu. Tente Novamente.");
    }
}

// Listener do input do valor.
// Troca qualquer letra inputada por um "", impossibilitando inputar letras.
amount.addEventListener("input", () => {
  // Regex: D+ = qualquer não-digito.
  const regexAmount = /\D+/g;

  // Da replace em qualquer letra encontrada no valor do amount para "".
  amount.value = amount.value.replace(regexAmount, "");
}, false)


// Listener do form.
// Escuta por submit e executa a arrow function.
form.addEventListener("submit", (e) => {
  // previne função defaulto
  e.preventDefault();

  // Switch para invocar handleConvert() baseado no tipo de moeda selecionada
  switch (currency.value) {
    case "USD":
      handleConvert(amount.value, USD, "$USD");
      break;
    case "EUR":
      handleConvert(amount.value, EUR, "€");
      break;
    case "GBP":
      handleConvert(amount.value, GBP, "£");
      break;
  }
}, false)