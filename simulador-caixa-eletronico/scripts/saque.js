document.querySelector("button").addEventListener("click", saque);

function saque() {
  const valorInput = document.getElementById("valor-saque").value.trim();
  const valorDeSaque = parseInt(valorInput);
  const resultado = document.getElementById("resultado-saque");

  if (isNaN(valorDeSaque) || valorDeSaque < 2) {
    resultado.innerHTML =
      "<p class='error'>Por favor, insira um valor válido para saque (mínimo R$ 2,00).</p>";
    return;
  }

  const notas = [100, 50, 20, 10, 2, 5];
  const distribuicao = {};
  let restante = valorDeSaque;

  for (let nota of notas) {
    const quantidade = Math.floor(restante / nota);
    if (quantidade > 0) {
      distribuicao[nota] = quantidade;
      restante -= quantidade * nota;
    }
  }

  if (restante !== 0) {
    resultado.innerHTML =
      "<p class='error'>Não é possível sacar esse valor com as notas disponíveis.</p>";
    return;
  }

  let mensagem = `<p class='sucesso'>Notas para saque de R$ ${valorDeSaque},00:</p><ul class='sucesso'>`;
  for (let nota in distribuicao) {
    mensagem += `<li>${distribuicao[nota]} nota(s) de R$ ${nota},00</li>`;
  }
  mensagem += "</ul>";
  resultado.innerHTML = mensagem;
}
