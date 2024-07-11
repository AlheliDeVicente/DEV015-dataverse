//función para filtrar data//
export const filterData = function (data, filterBy, value) {
  if(filterBy === "name" && value){
    const filteredData=data.filter((philosopher)=>{
      return philosopher.name === value
    });
    return filteredData
  }
  //primer filtro, rama de la filosofía//
  if (filterBy === "branchOfPhilosophy" && value) {
    const filteredData = data.filter((philosopher) => {
      return philosopher.branchOfPhilosophy.includes(value);
    });
    return filteredData;
  } else {
    //segundo filtro, tipo o corriente filosófica//
    if (filterBy === "typeOfPhilosophy" && value) {
      const filteredData = data.filter((philosopher) => {
        return philosopher.typeOfPhilosophy.includes(value);
      });
      return filteredData;
    } else {
      //tercer filtro tradición filosófica//
      if (filterBy === "classification" && value) {
        const filteredData = data.filter((philosopher) => {
          return philosopher.facts.classification=== value;
        });
        return filteredData;
      }
    }
  }
  return data;
};
//función para ordenar data de más antiguo a más reciente//
export const sortData = function (data, sortBy, sortOrder) {
  const copiedData = data.map((philosophers) => philosophers);
  copiedData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.facts.century - b.facts.century;
    } else {
      return b.facts.century - a.facts.century;
    }
  });
  return copiedData;
};

//función para calcular data
export const womenPhilosophersStats = function (data) {
  const womenPhilosophers = data.reduce((totalWomen, philosopher) => {
    if (philosopher.facts.gender === "Femenino") {
      return totalWomen + 1;
    } else {
      return totalWomen;
    }
  }, 0);
  const percentage = (womenPhilosophers / data.length) * 100;
  return percentage.toFixed(2);
};

export const philosophersBeforeXIXStats = function (data) {
  const philosophersBeforeXIX = data.reduce(
    (totalPhilosophers, philosopher) => {
      if (philosopher.facts.century < 1900) {
        return totalPhilosophers + 1;
      } else {
        return totalPhilosophers;
      }
    },
    0
  );
  const percentage = (philosophersBeforeXIX / data.length) * 100;
  return percentage.toFixed(2);
};
export const analyticPhilosopherStats = function (data) {
  const philosophersBeforeXIX = data.reduce(
    (totalPhilosophers, philosopher) => {
      if (philosopher.facts.classification === "Filosofía analítica") {
        return totalPhilosophers + 1;
      } else {
        return totalPhilosophers;
      }
    },
    0
  );
  const percentage = (philosophersBeforeXIX / data.length) * 100;
  return percentage.toFixed(2);
};
