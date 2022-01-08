    // console.log("elementos del documento");
    // console.log(window);
    // console.log(document);
    // console.log(document.head);//devuelve la parte de head
    // console.log(document.body);//devuelve la parte del body
    // console.log(document.documentElement);//la etiqueta HTML
    // console.log(document.doctype);//devuelve el tipo de documento
    // console.log(document.charset);//juego de caracteres del documento
    // console.log(document.title);//devuelve el titulo del documento
    // console.log(document.links);//coleccion de elementos html
    // console.log(document.images);//devuelve imagnes del documento
    // console.log(document.forms);//devuleve los formularios del documento
    // console.log(document.styleSheets);//devuelve los estilos aplicados
    // console.log(document.scripts);// devuelve los scripts

    // setTimeout(() => {
    //     console.log(document.getSelection().toString());    
    // }, 3000);

    // document.write("<h2>Hola mundo desde h2</h2>");


//62.-***** nodos, elementos y selectores*****
// en MDN buscas Node.node.Type para ver los distintos tipos de nodos
//https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

    // console.log(document.getElementsByTagName("li"));
    // console.log(document.getElementsByClassName("card"));
    // console.log(document.getElementsByName("nombre"));
    // console.log(document.getElementById("menu"));
    // console.log(document.querySelector("a"));
    // console.log(document.querySelectorAll("a"));
    // console.log(document.querySelectorAll("a").length);
    // document.querySelectorAll("a").forEach((elemento)=>console.log(elemento));
    // console.log(document.querySelector(".card"));
    // console.log(document.querySelectorAll(".card")[2]);
    // console.log(document.querySelector("#menu li"));
    // console.log(document.querySelectorAll("#menu li"));

//63.- ***** DOM: ATRIBUTOS Y DATA-ATRIBUTES *****
    // console.log(document.documentElement.lang);
    // console.log(document.documentElement.getAttribute("lang"));
    // console.log(document.querySelector(".link-dom").href);
    // console.log(document.querySelector(".link-dom").getAttribute("href"));

    // document.documentElement ="en";
    // console.log(document.documentElement.lang);

    // document.documentElement.setAttribute("lang","es-MX");
    // console.log(document.documentElement.lang);

    // const $linkDOM = document.querySelector(".link-dom");
    // console.log($linkDOM);

    // $linkDOM.setAttribute("target","_blanck");
    // $linkDOM.setAttribute("rel","noopener");
    // $linkDOM.setAttribute("href","https://instagram/alesnchz8");
    // console.log($linkDOM.hasAttribute("rel"));
    // $linkDOM.removeAttribute("rel");
    // console.log($linkDOM.hasAttribute("rel"));

    // //data-atributes
    // //otener el valor egun el data-atribute
    // console.log($linkDOM.getAttribute("data-description"));
    // console.log($linkDOM.dataset);
    // //modificar el data-atribute
    // console.log($linkDOM.dataset.description);
    // $linkDOM.setAttribute("data-description","modelo de objeto de documento");
    // console.log($linkDOM.dataset.description);
    // $linkDOM.dataset.description = "hola este es mi instagram";
    // console.log($linkDOM.dataset.description);

    // console.log($linkDOM.hasAttribute("data-id"));
    // console.log($linkDOM.removeAttribute("data-id"));
    // console.log($linkDOM.hasAttribute("data-id"));

//64.- ***** ESTILOS Y VARIABLES CSS *****
//estilos de manera dinamica

    // //obtener el estilo mediante el atributo
    // console.log($linkDOM.style);
    // console.log($linkDOM.getAttribute("style"));
    // //obtener el estilo en especifico
    // console.log($linkDOM.style.backgroundColor);
    // console.log($linkDOM.style.color);
    // console.log(window.getComputedStyle($linkDOM));
    // console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
    // //agregar estilos con la propiedad set
    // $linkDOM.style.setProperty("text-decoration","none");
    // $linkDOM.style.setProperty("display","block");
    // //agregar estilos con la notacion del punto
    // $linkDOM.style.width = "50%";
    // $linkDOM.style.textAlign = "center";
    // $linkDOM.style.marginLeft = "auto";
    // $linkDOM.style.marginRight = "auto";
    // $linkDOM.style.padding = "1rem";
    // $linkDOM.style.borderRadius = ".5rem";
    // //obtener el atributo style
    // console.log($linkDOM.style);
    // console.log($linkDOM.getAttribute("style"));
    // console.log(getComputedStyle($linkDOM));
    // //variables css--custom properties css
    // const $html = document.documentElement, $body = document.body;

    // let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    // let varyelowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
    // console.log(varDarkColor, varyelowColor);

    // //acceder a las variables css
    // $body.style.backgroundColor = varDarkColor;
    // $body.style.color = varyelowColor;

    // //dar otro valor a las variables css
    // $html.style.setProperty("--dark-color","#000");
    // varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

    // $body.style.setProperty("background-color",varDarkColor);

//65.- ***** CLASES CSS ***** 
    const $card = document.querySelector(".card");

    // console.log($card);
    // console.log($card.className);
    // console.log($card.classList);
    // console.log($card.classList.contains("rotate-45"));
    // //agregar una clase
    // $card.classList.add("rotate-45");
    // console.log($card.classList.contains("rotate-45"));
    // console.log($card.className);
    // console.log($card.classList);

    // //remover una clase
    // $card.classList.remove("rotate-45");
    // console.log($card.classList.contains("rotate-45"));

    // //metodo qe funciona al mismo tiempo el add y remove, a manera de interruptor
    // $card.classList.toggle("rotate-45");
    // console.log($card.classList.contains("rotate-45"));
    // $card.classList.toggle("rotate-45");
    // console.log($card.classList.contains("rotate-45"));
    // $card.classList.toggle("rotate-45");
    
    // //remplazar una clase por otra
    // $card.classList.replace("rotate-45", "rotate-135");

    // //agregar,quitar clases, puedes varias solo poniendo las comas
    // $card.classList.add("opacity-80", "sepia");
    // $card.classList.remove("opacity-80", "sepia");
    // $card.classList.toggle("opacity-80", "sepia"); 

//66.- ***** TEXTO Y HTML *****
//interactuar con el contendo textual y el contenido html
//  const $whatIsDOM = document.getElementById("que-es");
//     let text = `
//         <p>
//         El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//         </p>
//         <p>
//         Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//         </p>
//         <p>
//         <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//         </p>
//     `
//     //Remplazar el texto en el html por el de arriba
//     //$whatIsDOM.innerText = text;
//     $whatIsDOM.textContent = text;
//     //usar cuando la variable tiene codigo html
//     $whatIsDOM.innerHTML = text;
//     //reemplazar el elemento del dom por el contenid de la variable text
//     $whatIsDOM.outerHTML = text;

//67.-***** TRAVERING: RECORRIENDO EL DOM *****
//Una serie de propiedades que nos da el api del dom para poder recorrer
//los elementos
    // const $cards = document.querySelector(".cards");

    // console.log($cards);
    // console.log($cards.children);
    // console.log($cards.children[2]);
    // console.log($cards.parentElement);
    // //primer nodo o elemento hijo
    // console.log($cards.firstElementChild);
    // //ultimo nodo o elemento hijo
    // console.log($cards.lastElementChild);
    // //hermano anterior que es el enlace
    // console.log($cards.previousElementSibling);
    // //hermano despues que es la etiqueta scrip
    // console.log($cards.nextElementSibling);
    // //metodo que busca el ancestro o el padre mas cerano del tipo de selector que se le de
    // console.log($cards.closest("div"));
    // console.log($cards.closest("body"));
    // //cual es la seccion ancestral mas cercana al hijo 3
    // console.log($cards.children[2].closest("section"));

//68.- ***** CREANDO ELEMENTOS Y FRAGMENTOS *****
    // const $figure = document.createElement("figure"),
    // $img = document.createElement("img"),
    // $figcaption = document.createElement("figcaption"),
    // $figcaptionText = document.createTextNode("Animals"),
    // $cards = document.querySelector(".cards"),
    // $figure2 = document.createElement("figure");

    // $img.setAttribute("src", "https://placeimg.com/200/200/animals");
    // $img.setAttribute("alt", "Animals");
    // $figure.classList.add("card");

    // $figcaption.appendChild($figcaptionText);
    // $figure.appendChild($img);
    // $figure.appendChild($figcaption);
    // $cards.appendChild($figure);

    // $figure2.innerHTML = `
    // <img src="https://placeimg.com/200/200/people" alt="People">
    // <figcaption>People</figcaption>
    // `;
    // $figure2.classList.add("card");

    // $cards.appendChild($figure2);

    // const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    // $ul = document.createElement("ul");

    // document.write("<h3>Estaciones del Año</h3>");
    // document.body.appendChild($ul);

    // estaciones.forEach((el) => {
    // const $li = document.createElement("li");
    // $li.textContent = el;
    // $ul.appendChild($li);
    // });

    // const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    // $ul2 = document.createElement("ul");

    // document.write("<h3>Continentes del Mundo</h3>");
    // document.body.appendChild($ul2);
    // $ul2.innerHTML = "";
    // continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

    // const meses = [
    //     "Enero",
    //     "Febrero",
    //     "Marzo",
    //     "Abril",
    //     "Mayo",
    //     "Junio",
    //     "Julio",
    //     "Agosto",
    //     "Septiembre",
    //     "Octubre",
    //     "Noviembre",
    //     "Diciembre",
    // ],
    // $ul3 = document.createElement("ul"),
    // $fragment = document.createDocumentFragment();

    // meses.forEach((el) => {
    // const $li = document.createElement("li");
    // $li.textContent = el;
    // $fragment.appendChild($li);
    // });

    // document.write("<h3>Meses del Año</h3>");
    // $ul3.appendChild($fragment);
    // document.body.appendChild($ul3);

//69.- ***** TEMPLATE HTML *****
    // const $cards = document.querySelector(".cards"),
    // $template = document.getElementById("template-card").content,
    // $fragment = document.createDocumentFragment(),
    // cardsContent = [
    //     {
    //     title: "Tecnología",
    //     img: "https://placeimg.com/200/200/tech",
    //     },
    //     {
    //     title: "Animales",
    //     img: "https://placeimg.com/200/200/animals",
    //     },
    //     {
    //     title: "Arquitectura",
    //     img: "https://placeimg.com/200/200/arch",
    //     },
    //     {
    //     title: "Gente",
    //     img: "https://placeimg.com/200/200/people",
    //     },
    //     {
    //     title: "Naturaleza",
    //     img: "https://placeimg.com/200/200/nature",
    //     },
    // ];

    // cardsContent.forEach((el) => {
    // $template.querySelector("img").setAttribute("src", el.img);
    // $template.querySelector("img").setAttribute("alt", el.title);
    // $template.querySelector("figcaption").textContent = el.title;

    // let $clone = document.importNode($template, true);
    // $fragment.appendChild($clone);
    // });

    // $cards.appendChild($fragment);
//appendChild: siempre agrega el elemento al final del selector objetivo

//70.- ***** MODIFICANBDO ELEMENTOS *****
//metodos que permite insertar en cualquier lugar
    // const $cards = document.querySelector(".cards"),
    // $newCard = document.createElement("figure"),
    // $cloneCards = $cards.cloneNode(true);

    // $newCard.innerHTML = `
    // <img src="https://placeimg.com/200/200/any" alt="Any">
    // <figcaption>Any</figcaption>
    // `;
    // $newCard.classList.add("card");

//metodo para remplazar algun elemento existente
    //$cards.replaceChild($newCard, $cards.children[2]);

//metodo para eliminar el ultimo elemento
    //$cards.removeChild($cards.lastElementChild);

//metodo para insertar primero antes de cualquier elemento
    //$cards.insertBefore($newCard, $cards.firstElementChild);

//metodo para clonar el o los elementos
    // document.body.appendChild($cloneCards);

//71.- ***** MODIFICANDO ELEMENTOS (NUEVO ESTILO) *****

// .insertAdjacent...
//hace referencia a un nodo de tipo elemento, es decir html
//   .insertAdjacentElement(position, el)

//texto que tengas en formato html
//   .insertAdjacentHTML(position, html)

//nodos de texto con contenido html
//   .insertAdjacentText(position, text)

// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)

 const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);//ultimo hijo
//$cards.insertAdjacentElement("beforeend", $newCard);//primer hijo
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);

//72.-***** MANEJADORES DE EVENTOS ******

// //Los eventos son los mecanismos que tenemos en JavaScript para controlar las 
// //acciones del usuario y definir el comportamiento del documento en cierto 
// //momento o cuando se cumplan ciertas condiciones.
// //Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador
// //de Eventos).

// //https://developer.mozilla.org/en-US/docs/Web/Events

// //evento desde el documento HTML
// function holaMundo() {
//   alert("Hola Mundo");
//   console.log(event);
// }

// //pasar parametros a la funcion del evento
// function saludar(nombre = "Desconocid@") {
//   alert(`Hola ${nombre}`);
//   console.log(event);
// }

// //asignar evento de tipo semantico al documento HTML desde el doc JS
// const   $eventoSemantico = document.getElementById("evento-semantico"),
//         $eventoMultiple = document.getElementById("evento-multiple"),
//         $eventoRemover = document.getElementById("evento-remover");

// //evento semantico
// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert("Hola Mundo Manejador de Eventos Semántico");
//   console.log(e);
//   console.log(event);
// };

// //evento multiple
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Hola Mundo Manejador de Eventos Múltiple");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(event);
// });

// //no se puede pasar atributos a la funcion poruq eno esta permitido, pero con la ayuda
// //de las arrowfunction esta permitido o es posible
// $eventoMultiple.addEventListener("click", () => {
//   saludar();
//   saludar("Jon");
// });

// //funcion expresada
// const removerDobleClick = (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick);
// //atributo html que desabilita el boton
//   $eventoRemover.disabled = true;
// };
// $eventoRemover.addEventListener("dblclick", removerDobleClick); 


//74.-****** FLUJO DE EVENTOS (BURBUJA Y CAPTURA) *****
// // Si no se especifica el parámetro boolean, el valor por defecto es false.
// // Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más 
// // interno al más externo <body>)
// // Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento 
// // más externo <body> al más interno)

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
//   );
// }

// console.log($divsEventos);

// $divsEventos.forEach((div) => {
// //Fase de burbuja,porque vamos del elemento mas interno hacia el mas externo
// //   div.addEventListener("click", flujoEventos);
// //   div.addEventListener("click", flujoEventos, false);

//   //Fase de captura, porque va del elemento mas exrterno al elemento mas interno
// //   div.addEventListener("click", flujoEventos, true);
//   div.addEventListener("click", flujoEventos, {
//     capture: false,
//     once: true,
//   });
// });

//75.-****** STOPPROPAGATION & PREVENTDEFAULT *****
