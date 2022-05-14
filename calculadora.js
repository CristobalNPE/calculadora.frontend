let buttons = document.querySelectorAll(".mybutton");
let cuadroResultado = document.getElementById("cresultado");

for (let index = 0; index < buttons.length; index++) {
  let element = buttons[index];
  element.addEventListener("click", () => {
    accion(element.textContent);
    console.log(element);
  });
}

function accion(valor) {
  if (valor == "AC") {
    cuadroResultado.value = "";
  } else if (valor == "=") {
    if (cuadroResultado.value == "") {
      cuadroResultado.value = "";
    } else {
      cuadroResultado.value = eval(cuadroResultado.value);
    }
  } else if (
    !isNaN(valor) ||
    valor == "+" ||
    valor == "−" ||
    valor == "×" ||
    valor == "÷"
  ) {
    if (valor == "−") {
      valor = "-";
    }
    if (valor == "×") {
      valor = "*";
    }
    if (valor == "÷") {
      valor = "/";
    }

    cuadroResultado.value += valor;
  } else {
    cuadroResultado.value = "";
  }
}
