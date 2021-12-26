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

    const $linkDOM = document.querySelector(".link-dom");
    console.log($linkDOM);

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

    //obtener el estilo mediante el atributo
    console.log($linkDOM.style);
    console.log($linkDOM.getAttribute("style"));
    //obtener el estilo en especifico
    console.log($linkDOM.style.backgroundColor);
    console.log($linkDOM.style.color);
    console.log(window.getComputedStyle($linkDOM));
    console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
    //agregar estilos con la propiedad set
    $linkDOM.style.setProperty("text-decoration","none");
    $linkDOM.style.setProperty("display","block");
    //agregar estilos con la notacion del punto
    $linkDOM.style.width = "50%";
    $linkDOM.style.textAlign = "center";
    $linkDOM.style.marginLeft = "auto";
    $linkDOM.style.marginRight = "auto";
    $linkDOM.style.padding = "1rem";
    $linkDOM.style.borderRadius = ".5rem";
    //obtener el atributo style
    console.log($linkDOM.style);
    console.log($linkDOM.getAttribute("style"));
    console.log(getComputedStyle($linkDOM));
    //variables css--custom properties css
    const $html = document.documentElement, $body = document.body;

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let varyelowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
    console.log(varDarkColor, varyelowColor);

    //acceder a las variables css
    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varyelowColor;

    $html.style.setProperty("--dark-color","pink");




