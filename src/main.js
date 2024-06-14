import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//obtener radioButtons, los selectores de filtros, el boton de limpar y el de mostrar la data//
const branchSelector = document.querySelector('[data-testid="select-sort"]');
const radioButtons = document.getElementsByName("sort-order");
const typeSelector = document.querySelector('[data-testid="select-sort1"]');
const cleanButton = document.querySelector('[data-testid="button-clear"]');
const statsButton = document.querySelector('[data-testid="show-stats"]');
const statsSection = document.getElementById("stats");
const classSelector = document.querySelector('[data-testid="select-sort2"]');

//se declara la función filtered data que nos servirá para todas las demás funciones, esto fue una recomendación de las coaches//
let filteredData = data;

//función de filtrado por rama//
branchSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const branchSelected = branchSelector.value; //el branch selected es el value que tenga en ese momento la option del selector//
  filteredData = filterData(data, "branchOfPhilosophy", branchSelected); //variable de filter data obtiene el valor de la data pasada por la función//
  return renderItems(filteredData);
});

//función de filtrado por tipo//
typeSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const typeSelected = typeSelector.value;
  filteredData = filterData(filteredData, "typeOfPhilosophy", typeSelected);
  return renderItems(filteredData);
});

//función de filtrado por tradición//
classSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const classSelected = classSelector.value;
  filteredData = filterData(filteredData, "classification", classSelected);
  return renderItems(filteredData);
});

//fución para ordenar, se le añade un event listener a cada uno de los radiobuttons//
radioButtons.forEach(function (radio) {
  radio.addEventListener("change", () => {
    //evento change registrar cambios registra cambios en la selección//
    const selectedRadio = document.querySelector(
      'input[name="sort-order"]:checked'
    ); //se obtiene cuál es el radio button seleccionado en ese momento//
    const selectedOrder = selectedRadio.value; //se obtiene el valor del radio button seleccionado//
    const sortedData = sortData(filteredData, "century", selectedOrder); //la constante sortered data obtiene el valor de filtered data pasada por la funci+on sort data//
    renderItems(sortedData);
  });
});

//boton de limpiar//
cleanButton.addEventListener("click", () => {
  typeSelector.value = ""; //se le da el valor "" a los filtros//
  branchSelector.value = ""; //se le da el valor "" a los filtros//
  classSelector.value = ""; //se le da el valor "" a los filtros//
  filteredData = data; //la constante data es toda la data//

  statsSection.innerHTML = "";
  renderItems(filteredData); //se muestra toda la data//
});

//boton de mostrar data//
statsButton.addEventListener("click", () => {
  const statsParagraphs = document.createElement("p");
  const computedStats = computeStats(data);
  statsParagraphs.innerHTML = `Hay un promedio de ${computedStats}% mujeres filosofas`;
  statsSection.appendChild(statsParagraphs); // Añadir el div al cuerpo del documento
});
renderItems(data);
