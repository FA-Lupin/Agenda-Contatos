const form = document.getElementById("formctt");

const nomes = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNome = document.getElementById("Nome");
  const inputNumero = document.getElementById("Numero");

  if (numeros.includes(parseFloat(inputNumero.value))) {
    alert(`O número ${inputNumero.value} já está na lista.`);
  } else {
    nomes.push(inputNome.value);
    numeros.push(parseFloat(inputNumero.value));
  }

  let linha = "<tr>";
  linha += "<td>" + inputNome.value + "</td>";
  linha += "<td>" + inputNumero.value + "</td>";
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNome.value = "";
  inputNumero.value = "";
});
