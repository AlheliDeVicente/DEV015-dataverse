export const renderItems = (data) => {
  //crear ul en donde se pondrán las li//
  const ul = document.createElement("ul");
  //método forEach para crear un li para cada objeto del array//
  data.forEach(function(philosophers){
    const card = document.createElement("li");
    //atriburos de microdatos//
    card.setAttribute("itemscope", "");
    card.setAttribute("itemtype", "https://schema.org/Person");
    //insertar contenido html al li//
    card.innerHTML = `
    <img src="${philosophers.imageUrl}" alt="${philosophers.name}" itemprop="image"/>
    <h3 itemprop="givenName">${philosophers.name}</h3>
    <p itemprop="description"><strong>Descripción:</strong> ${philosophers.shortDescription}</p>
    <p itemprop="gender"><strong>Género:</strong> ${philosophers.facts.gender}
    <p itemprop="branchOfPhilosophy"><strong>Ramas de la filosofía:</strong> ${philosophers.branchOfPhilosophy.join(", ")}</p>
    <p itemprop="typeOfPhilosophy"><strong>Corrientes:</strong> ${philosophers.typeOfPhilosophy.join(", ")}</p>
    <p itemprop="classification"><strong>Tradición:</strong> ${philosophers.facts.classification}</p>
    <p itemprop="century"><strong>Siglo:</strong> ${philosophers.facts.century}</p>
    <div itemprop="mainWorks">
    <h4>Obras Principales</h4> ${philosophers.mainWorks.map(work=>
    `<p><strong>Título:</strong> ${work.title} <strong>Año:</strong> ${work.year}</p>`).join(" ")} 
    </div>
    `
    //agregar tarjeta al ul//
    ul.appendChild(card);
  });
  //obtener el elemento en donde se insertarán la ul con las tarjetas//
  const section = document.getElementById("root");
  section.innerHTML = "";
  //agregar el elemento ul al section//
  section.appendChild(ul) 
  return section };
renderItems
