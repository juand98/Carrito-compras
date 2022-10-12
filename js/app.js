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
