# Dataverse

## Índice

* [1. Definición del Producto](#1-definicion-del-producto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Prompting y uso de IA](#3-prompt)
* [4. Historias de Usuario](#4-historias-de-usuario)
* [5. Prototipos de Alta Fidelidad](#65prototipos)
***

## 1. Definición del Producto
*Take a Philosophic Dive* es una página web desarrollada en los lenguajes `HTML`, `Java Script` y `CSS`, cuyo principal objetivo es brindar a los usuarios un primer acercamiento a la filosofía. Se alberga en tarjetas la principal información de 24 de los filósofos más importantes a lo largo de la historia, desde Platón hasta Judith Butler. Así, las usuarias saber cuáles son las principales ramas que fueron trabajados por estos pensadores, las corrientes a las que pertenecían y las obras que marcaron su pensamiento. Del mismo modo, se cuenta con una parte de estadísticas, en donde los usuarios podrán encontrar datos de interés sobre los filósofos enlistados.

La página web está diseñada para que pueda ser consultada en diversos dispositivos, desde telefonos hasta pantallas de escritorio. Con una estructura amigable a los usuarios que les permite buscar el nombre de un pensador en especifico y filtrar de acuerdo al campo que deseen saber más.
*Take a Philosophic Dive* es un intento por seguir abonando a la difusión y divulgación de la filosofía, disciplina que nos atañe a todos y de la cual siempre se puede seguir aprendiendo.
Anímate a tomar __un clavado filosófico__

## 2. Funcionalidades:
Las principales funcionalidades de la página son: La visualización de los datos a modos de tarjeta, el filtrado y ordenado de la data y el cálculo de algunas estadísticas.

- __Visualización__: Se crearon tarjetas cuyos elementos cuentan con las propiedades de `microdatos` como `itemscope` `itemtype` e `itemprop`.  
- __Filtrado__: Las usuarias pueden filtrar la data mediante diversos menus desplegables `select` que corresponden a distintas propiedades. Se cuenta con un botón para las ramas de la filosofía, otro para la clasificación (analítica o continental) y otro para la corriente filosófica. Asimismo hay una `barra de búsqueda` que permite que las usuarias encuentren a un filosófo en específico sólo ingresando su nombre
-__Ordenado__: Las usuarias pueden decidir si quieren observar la data en orden ascendente o descendiente de acuerdo al año en que haya sido cada filósofo. Para ello igualmente cuentan con un menú desplegable `select`
-__Estadísticas__: La página muestra tres datos que se consideran de interés de acuerdo a la información mostrada: Filósofos por género, por clasificación y anteriores al siglo XIX. Se cuentan con dos gráficas para ilustrar las estadísticas de género y las de clasificación.
-__Botones__: Además de las funcionalidades anteriormente enlistadas, la página cuenta con un *botón de limpieza*, el cual resetea los filtros seleccionados y vuelve a la vista original de la página. Existe un *boton de estadísticas* el cual despliega los cálculos anteriormente mencionados, un *boton de búsqueda* para la barra de búsqueda y un *boton de filtros* el cual muetra los filtros anteriormente descritos en un menu desplegable a la derecha.
-__Test Unitarios__: Para asegurar el correcto funcionamiento del filtrado, ordenado y cálculo estadísticas se desarrollaron test usando el framework `jest` que cubrieran al menos el 70% de las funciones.

## 3. Prompting:
La generación de los datos se realizo mediante la herramienta de Inteligencia Artifical `ChatGPT`de OpenAI. Mediante un prompt específico se le pidio que generara un array de 24 objetos con los `KeyElements`: id, shortDescription, description, facts, name, entre otros.
A continuación se deja el prompt utilizado:
[prompt](src/assets/prompt.png) [prompt1](src/assets/prompt1.png)
## 4. Historias de Usuario:


## 5. Prototipos de alta fidelidad:
