import { analyticPhilosopherStats, filterData, sortData, womenPhilosophersStats, philosophersBeforeXIXStats} from "./dataFunctions.js";
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
const rootElement = document.getElementById('root');
// se obtiene renderItems//
const ulElement = renderItems(data);
// se obtiene un elemento del DOM en donde se ponen los ul de renderItems//
rootElement.appendChild(ulElement);
//se declara la función filtered data que nos servirá para todas las demás funciones, esto fue una recomendación de las coaches//
let filteredData = data;

//función de filtrado por rama//
branchSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const branchSelected = branchSelector.value; //el branch selected es el value que tenga en ese momento la option del selector//
  filteredData = filterData(data, "branchOfPhilosophy", branchSelected); //variable de filter data obtiene el valor de la data pasada por la función//
  rootElement.innerHTML=""
  const ulElement=renderItems(filteredData) //UlElement ahora tiene la data filtrada//
  rootElement.appendChild(ulElement) //se pone en la sección root//
});

//función de filtrado por tipo//
typeSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const typeSelected = typeSelector.value;
  filteredData = filterData(filteredData, "typeOfPhilosophy", typeSelected);
  rootElement.innerHTML=""
  const ulElement=renderItems(filteredData)
  rootElement.appendChild(ulElement);
});

//función de filtrado por tradición//
classSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const classSelected = classSelector.value;
  filteredData = filterData(filteredData, "classification", classSelected);
  rootElement.innerHTML = ""
  const ulElement=renderItems(filteredData);
  rootElement.append(ulElement)
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
    rootElement.innerHTML=""
    const ulElement = renderItems(sortedData);
    rootElement.appendChild(ulElement)
  });
});

//boton de limpiar//
cleanButton.addEventListener("click", () => {
  typeSelector.value = ""; //se le da el valor "" a los filtros//
  branchSelector.value = ""; //se le da el valor "" a los filtros//
  classSelector.value = ""; //se le da el valor "" a los filtros//
  filteredData = data; //la variable data es toda la data//
  statsSection.innerHTML = "";
  rootElement.innerHTML = ""
  rootElement.appendChild(renderItems(filteredData)); //se muestra toda la data//
})

//boton de mostrar data//
statsButton.addEventListener("click", () => {
  const statsParagraphs = document.createElement("p");
  const womenPhilosophers = womenPhilosophersStats(data)
  const philosophersBeforeXIX = philosophersBeforeXIXStats(data);
  const analyticPhilosopher = analyticPhilosopherStats(data)
  statsParagraphs.innerHTML = `<p> Hay un promedio de ${womenPhilosophers}% mujeres filosofas</p>  
  <p> Alrededor de ${philosophersBeforeXIX}% de los filósofos son anteriores al siglo XIX</p>
  <p> Hay un promedio de ${analyticPhilosopher}% filósofos analítcos `;
  statsSection.appendChild(statsParagraphs); // Añadir el p al cuerpo del documento
});