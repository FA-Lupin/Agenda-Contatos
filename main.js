const form = document.getElementById("formctt");

const nomes = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNome = document.getElementById("Nome");
  const inputNumero = document.getElementById("Numero");

  const numero = parseFloat(inputNumero.value);

  if (numeros.includes(numero)) {
    alert(`O número ${numero} já está na lista.`);
  } else {
    nomes.push(inputNome.value);
    numeros.push(numero);
    
    let linha = "<tr>";
    linha += "<td>" + inputNome.value + "</td>";
    linha += "<td>" + numero + "</td>";
    linha += "</tr>";

    linhas += linha;

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

    inputNome.value = "";
    inputNumero.value = "";
  }
});
