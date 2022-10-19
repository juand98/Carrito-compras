// Primeros pasos con le proyecto.
// Notemos la estuctrura HTML de nuestro header, centremonos en el contenedor de nuestro carrito el cual tiene id="carrito", dentro de este podemos notar una tabla que le da la forma a este contenedor, un <tbody></tbody> que será el lugar donde se irán colocando nuestros cursos y un botón que dice "vaciar carrito".

// Notemos el listado de cursos (clas="listado-cursos") en donde se espliega toda la lista de los cursos a través de cards. La maquetación consta de 4 filas (class="row") y cuatro columnas (class="four columns"). Cada card contiene su contenedor principal (class="card"), en el se encuentra:
// - La imagén de curso <img>
// - La información general del curso contenida dentro de un contenedor (class="info-card") y dentro de este tenemos la información general del curso expresada en elementos HTML.

// Variables - Selectores DOM

const carrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");
// <tbody></tbody>
// Cada curso que se irá agregando a medida que el usuario presione el botón, se colocará en el elemento html <tbody></tbody> de nuestro carrito. Inicialmente está vacio porque este ira completando su contenido HTML de forma dinámica, veremos como generar el html y como agregarlo ahí.

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

const listaCursos = document.querySelector("#lista-cursos");
// Lo primero en este proyecto es crear un selector para la lista de los cursos, para el contenedor principal (class="listado-cursos") para poder agregarle a este un listener que será escuchado cada vez que el usuario presione el botón "Agregar Al Carrito" de cualquier curso. Este botón agregara el elemento en el carrito.
// Usamos "querySelector" ya que sólo tenemos un id para este elemento y nombramos la variable const porque este no se reasgina. La mayoria de nuestros selectores de elementos html usualmente serán const.

//Registrar los listeners del proyecto
// Sabemos que en nuestro proyecto habrán varios eventos que serán escuchados al momento de hacer alguna acción. Usualmente podemos crear una función donde registramos todos los eventos del proyecto.

//(2) Mandamos a llamr la función creada.
registrarEventListeners();
//(1) Creamos la función de registro
function registrarEventListeners() {
  //(3) Agregamos los eventos, en este caso a la listaCursos, que al presionarse guardará los cursos en el carrito. Para que estas funciones no queden muy grandes, lo mejor es crear las funciones de los eventos a parte y acá solo mandarlas a llamar, así:

  //Cuando agregamos un curso presionando "Agregar Al Carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones

function agregarCurso(event) {
  //(1) Recordemos que debemos prevenir el event bubbling y que la función se ejecute solo cuando se presiona el botón agregar curso. Para esto hacemos uso del object event.
  //console.log(event.target.classList); //(1)
  //(1) Haciendo click sobre los elementos podemos observar las clases que tiene cada elemento, ahora, presionemos en el botón. Notemos en conosola que este botón tiene 5 clases diferentes, por lo que debemos seleccionar la clase más acertada para que la función se ejecute. Para esto usamos condicionales, de la siguiente manera.

  //(2)
  event.preventDefault();
  // Por defecto este elemento buscará un href donde ir, como no tenemos hasta ahora uno establecido, al presionar el botón se movera toda la vista hasta la parte superior, para evitar este moviemiento usamos .preventDefault()
  if (event.target.classList.contains("agregar-carrito")) {
    // con .contains() verificaremos si el elemento contiene la clase descrita allí, entonces se ejecuta la función
    // Notemos que ya tenemos el evento programado para que la función se ejecute una vez el usuario haga click sobre "Agregar Al Carrito"
    console.log("Click en agregar al carrito");

    // Ahora necesitamos sacar la información del elemento para leerla y enviarla al carrito, para esto, lo primero es seleccionar el elemento padre de toda la información, del cual vamos a extraer toda la información del curso seleccionado.
    const cursoSeleccionado = event.target.parentElement.parentElement;
    // Notemos que el evento ocurre en la clase "agregar-carrito", pero necesitamos seleccionar elemento padre que contiene toda la información del curso para extraerla, en el html notamos que "agregar-carrito" es hijo de la clase "info-card" y esta última es hija de la clase "card". Usando el event.target podemos escalar estas dos clases y seleccionar el elemento padre que contiene toda la información para extraerla.

    // Una vez seleccionado el elemento que tiene toda la información (class="card") procedemos a leer toda la información de ese elemento que nos sea útil para mandar al carrito, para esto creamos una función encargada de leer los datos de cada curso seleccionado y extraer la información
    leerDatosCurso(cursoSeleccionado);
  }
}
// Leer contenido HTML al que el usuario da click y extraer la información.
function leerDatosCurso(cursoSeleccionado) {
  // Esta función se encargará de extraer la información del elemento seleccionado, como vimos anteriormente, este elemento seleccionado es el contenedor padre de toda la card, que contiene toda la información HTML.

  // Esta función crea un objeto con la información y usamos selectores de elementos para extraer la información.
  const infoCurso = {
    imagen: cursoSeleccionado.querySelector("img").src,
    titulo: cursoSeleccionado.querySelector("h4").textContent,
    precio: cursoSeleccionado.querySelector("span").textContent,
    cantidad: 1,
    id: cursoSeleccionado.querySelector("a").getAttribute("data-id"),
    // .getAtrubutte nos permite extraer el valor del atributo del elemento HTML.
  };
  console.log(infoCurso);
}
