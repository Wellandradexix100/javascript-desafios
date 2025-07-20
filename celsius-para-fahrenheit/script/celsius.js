document
  .querySelector("button")
  .addEventListener("click", conversorTemperatura);

function converterCelsiusEmFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function conversorTemperatura() {
  const input = document.getElementById("graus-celsius").value.trim();
  const resultado = document.getElementById("resultado");

  if (isNaN(input) || input === "") {
    resultado.innerHTML = "<p class='invalido'> Digite um valor valido!";
    return;
  }
  const fahrenheit = converterCelsiusEmFahrenheit(parseFloat(input));
  resultado.innerHTML = `<p>O resultado é: ${fahrenheit} °F</p>`;
}
