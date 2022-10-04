const restarForm = document.querySelector("#restarForm");
const primero = document.querySelector("#primero");
const segundo = document.querySelector("#segundo");
const enviar = document.querySelector("#enviar");
const numeros = document.querySelector("#numeros");
const formEdad = document.querySelector("#formEdad");
const edad = document.querySelector("#edad");
const formDescuento = document.querySelector("#formDescuento");
const destino = document.querySelector("#destino");
const origen = document.querySelector("#origen");
const formMes = document.querySelector("#formMeses");
const mes = document.querySelector("#mes");
const formTemperatura = document.querySelector("#formTemperatura");
const temperatura = document.querySelector("#temperatura");
const unidad = document.querySelector("#unidad");

document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
  imprimirDías();
});

function eventListeners() {
  restarForm && restarForm.addEventListener("submit", operacionesFunction);
  numeros && numeros.addEventListener("change", detectar7);
  formEdad && formEdad.addEventListener("submit", validarEdad);
  formDescuento && formDescuento.addEventListener("submit", descuentoFunction);
  formMes && formMes.addEventListener("submit", mesFunction);
  formTemperatura &&
    formTemperatura.addEventListener("submit", temperaturaFunction);
}

function operacionesFunction(e) {
  e.preventDefault();
  let valor1 = Number(primero.value);
  let valor2 = Number(segundo.value);
  restar = valor1 - valor2;
  multiplicar = valor1 * valor2;
  alert(
    `El resultado de la resta es ${restar}.\nEl resultado de la multiplicación es ${multiplicar}.`
  );
}

function detectar7(e) {
  let valor = e.target.value;
  console.log(valor);
  if (valor != 7) {
    alert(`El número ingresado fue: ${valor}.\nIngresa otro número.`);
    numeros.value = "";
  } else {
    alert(`Insertaste un 7`);
  }
}

function validarEdad(e) {
  e.preventDefault();

  let validar = Number(edad.value);

  if (validar >= 18 && validar > 1 && validar < 120) {
    document.write("<p>¡Felicidades lograste ingresar!</p>");
  } else {
    alert(
      "No puedes entrar.\nEres menor de 18 años ó mayor de 120 ó aún no naces.\nIngresa otra edad por favor."
    );
  }
}
function descuentoFunction(e) {
  e.preventDefault();

  let origenValue = origen.value;
  let destinoValue = destino.value;

  if (origenValue === "palma" && destinoValue === "barcelona") {
    alert("Tienes un descuento de 5%");
  } else if (origenValue === "palma" && destinoValue === "madrid") {
    alert("Tienes un descuento de 10%");
  } else if (origenValue === "palma" && destinoValue === "valencia") {
    alert("Tienes un descuento de 15%");
  } else {
    alert("no tienes ningún descuento");
  }
}

function imprimirDías() {
  console.log("imprimir dias");
  for (let index = 1; index <= 12; index++) {
    console.log(index);
    mes.insertAdjacentHTML(
      "beforeend",
      `<option value="${index}">${index}</option>`
    );
  }
}

function mesFunction(e) {
  e.preventDefault();
  let numeroMes = Number(mes.value);
  if (
    (numeroMes <= 7 && numeroMes % 2 != 0) ||
    (numeroMes >= 8 && numeroMes % 2 == 0)
  ) {
    alert("El mes tiene 31 días");
  } else if (
    ((numeroMes <= 6 && numeroMes % 2 == 0) ||
      (numeroMes >= 9 && numeroMes % 2 != 0)) &&
    numeroMes != 2
  ) {
    alert("El mes tiene 30 días");
  } else {
    alert("El mes tiene 28 días");
  }
}

function temperaturaFunction(e) {
  e.preventDefault();
  let temperaturaValue = Number(temperatura.value);
  let unidadValue = unidad.value;

  if (unidadValue === "farenheit") {
    let celcius = (temperaturaValue - 32) * (5 / 9);

    if (temperaturaValue >= 14 && temperaturaValue <= 32) {
      alert(`La temperatura es de: ${celcius} °C\nTemperatura baja`);
    } else if (temperaturaValue >= 32 && temperaturaValue <= 68) {
      alert(`La temperatura es de: ${celcius} °C\nTemperatura adecuada`);
    } else if (temperaturaValue >= 68 && temperaturaValue <= 96) {
      alert(`La temperatura es de: ${celcius} °C\nTemperatura alta`);
    } else {
      alert(`La temperatura es de: ${celcius} °C\nTemperatura desconocida`);
    }
  }
  if (unidadValue === "celcius") {
    let farenheit = temperaturaValue * (9 / 5) + 32;
    alert(`La temperatura es de: ${farenheit} °F`);
  }
}
