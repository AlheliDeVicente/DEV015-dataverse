export const filterData = function (data, filterBy, value){ 
  if (filterBy === "branchOfPhilosophy" && value) {
    const filteredData = data.filter((philosopher) => {
      return philosopher.branchOfPhilosophy.includes(value)});
    return filteredData
  } else { 
    if (filterBy ==="typeOfPhilosophy" && value){
      const filteredData = data.filter((philosopher)=>{
        return philosopher.typeOfPhilosophy.includes(value)})
      return filteredData
    }
  }
  return data
};
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
