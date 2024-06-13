import { filterData } from './dataFunctions.js';
import { sortData } from "./dataFunctions.js";
import { renderItems } from './view.js';
import data from './data/dataset.js'; 
//obtener radioButtons y el select//
const branchSelector = document.querySelector('[data-testid="select-sort"]');
const radioButtons = document.getElementsByName("sort-order");
const typeSelector = document.querySelector('[data-testid="select-sort1"]');
let filteredData = data;
//función de filtrado por rama//
branchSelector.addEventListener("change", () => { //evento change registra cambios en la selección//
  const branchSelected = branchSelector.value;
  filteredData = filterData(data, "branchOfPhilosophy", branchSelected);
  return renderItems(filteredData);
});
//función de filtrado por tipo//
typeSelector.addEventListener("change", () => { //evento change registra cambios en la selección//
  const typeSelected = typeSelector.value;
  filteredData = filterData(data, "typeOfPhilosophy", typeSelected);
  return renderItems(filteredData);
});
//fución para ordenar, se le añade un event listener a cada uno de los radiobuttons//
radioButtons.forEach(function (radio) {
  radio.addEventListener("change", () => {//evento change registrar cambios registra cambios en la selección//
    const selectedRadio = document.querySelector(
      'input[name="sort-order"]:checked'
    );
    const selectedOrder = selectedRadio.value;
    const sortedData = sortData(filteredData, "century", selectedOrder);
    renderItems(sortedData);
  });
});
renderItems(data);
