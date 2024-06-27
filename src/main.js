import { analyticPhilosopherStats, filterData, sortData, womenPhilosophersStats, philosophersBeforeXIXStats} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//obtener radioButtons, los selectores de filtros, el boton de limpar y el de mostrar la data//
const searchName = document.getElementById("philosopherName")
const searchButton =document.getElementById("search")
const branchSelector = document.querySelector('[data-testid="select-filter"]');
const orderSelector = document.querySelector('[data-testid="select-sort"]');
const typeSelector = document.querySelector('[data-testid="select-filter1"]');
const cleanButton = document.querySelector('[data-testid="button-clear"]');
const statsButton = document.querySelector('[data-testid="show-stats"]');
const statsSection = document.getElementById("stats");
const classSelector = document.querySelector('[data-testid="select-filter2"]');
const rootElement = document.getElementById('root');
// se obtiene renderItems//
const ulElement = renderItems(data);
// se obtiene un elemento del DOM en donde se ponen los ul de renderItems//
rootElement.appendChild(ulElement);
//se declara la función filtered data que nos servirá para todas las demás funciones, esto fue una recomendación de las coaches//
let filteredData = data;

//función de filtrado por nombre//
searchButton.addEventListener("click",()=>{
  const nameSelected = searchName.value
  filteredData = filterData(data, "name", nameSelected)
  rootElement.innerHTML=""
  const ulElement=renderItems(filteredData)
  rootElement.appendChild(ulElement)
})

//para que la barra de busqueda funcione con enter
searchName.addEventListener("keypress", (event)=>{
  if(event.key === "Enter"){
    const nameSelected = searchName.value
    filteredData = filterData(data, "name", nameSelected)
    rootElement.innerHTML=""
    const ulElement=renderItems(filteredData)
    rootElement.appendChild(ulElement)
  }})
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
orderSelector.addEventListener("change", () => {
  //evento change registra cambios en la selección//
  const orderSelected = orderSelector.value;
  const sortedData = sortData(filteredData, "century", orderSelected);
  rootElement.innerHTML = ""
  const ulElement=renderItems(sortedData);
  rootElement.append(ulElement)
});
//boton de limpiar//
cleanButton.addEventListener("click", () => {
  typeSelector.value = ""; //se le da el valor "" a los filtros//
  branchSelector.value = ""; //se le da el valor "" a los filtros//
  classSelector.value = ""; //se le da el valor "" a los filtros//
  searchName.value = ""
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
  statsParagraphs.innerHTML = `<p> Hay un promedio de ${womenPhilosophers} mujeres filosofas</p>  
  <p> Alrededor de ${philosophersBeforeXIX}% de los filósofos son anteriores al siglo XIX</p>
  <p> Hay un promedio de ${analyticPhilosopher} filósofos analítcos `;
  statsSection.appendChild(statsParagraphs); // Añadir el p al cuerpo del documento
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawGenderChart);
  google.charts.setOnLoadCallback(drawClassificationChart);
});

function drawGenderChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'Philosophers');
  data.addRows([
    ['Women', 2],
    ['Men', 22],
  ]);
  var options = {
    title: 'Filósofos por género',
    is3D: true,
    width: 400,
    height: 240,
    backgroundColor: 'transparent',
    colors: ["#8C342B", "#59352D", "#854738", "#D98E73", "#D9BBA9", "#B56449"]
  };
  var chart = new google.visualization.PieChart(document.getElementById('gender_chart_div'));
  chart.draw(data, options);
}
function drawClassificationChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Classification');
  data.addColumn('number', 'Philosophers');
  data.addRows([
    ['Analítica', 4],
    ['Continental', 20],
  ]);
  var options = {
    title: 'Filósofos por tradición',
    is3D: true,
    width: 400,
    height: 240,
    backgroundColor: 'transparent',
    colors: ["#8C342B", "#59352D", "#854738", "#D98E73", "#D9BBA9", "#B56449"]
  };
  var chart = new google.visualization.PieChart(document.getElementById('class_chart_div'));
  chart.draw(data, options);
}