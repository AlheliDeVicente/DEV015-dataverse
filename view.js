export const renderItems = (data) => {
  //crear ul en donde se pondrán las li//
  const ul = document.createElement("ul");
  ul.setAttribute("class", "philosophersList")
  //método forEach para crear un li para cada objeto del array//
  data.forEach(function (philosophers) {
    const card = document.createElement("li");
    //atriburos de microdatos//
    card.setAttribute("itemscope", "");
    card.setAttribute("itemtype", "https://schema.org/Person");
    card.setAttribute("class", "philosophersCard");
    card.setAttribute("data-id", philosophers.id)
    //insertar contenido html al li//
    card.innerHTML = `
    <div class = "image-container">
        <img src="${philosophers.imageUrl}" alt="${philosophers.name}" itemprop="image"/>
        </div>
        <div class = "info">
    <h3 itemprop="givenName"><strong>${philosophers.name}</strong></h3>
    <p itemprop="description"> ${philosophers.shortDescription}</p>
    <p itemprop="branchOfPhilosophy"><strong>Ramas de la filosofía:</strong> ${philosophers.branchOfPhilosophy.join(", ")}</p>
    <p itemprop="typeOfPhilosophy"><strong>Corrientes:</strong> ${philosophers.typeOfPhilosophy.join(", ")}</p>
    <p itemprop="classification"><strong>Tradición:</strong> ${philosophers.facts.classification}</p>
    <p itemprop="century"><strong>Siglo:</strong> ${philosophers.facts.century}</p>
    <div itemprop="mainWorks">
    <h4>Obras Principales</h4> 
     ${philosophers.mainWorks
    .map((work) =>
      `<p> <i>  ${work.title} </i> —  ${work.year}</p>`).join(" ")} 
    </div>
    </div>`;
    //agregar tarjeta al ul//
    ul.appendChild(card);
  });
  return ul;
};
renderItems;
