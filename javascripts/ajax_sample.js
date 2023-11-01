let number = 0;
let data = []; // Variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    if (data.length === 0) { // Solo recuperar datos si no están ya almacenados
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    data = request.response; // Almacena los datos una vez recuperados
                }
            }
        };
        request.open("GET", "ajax.json");
        request.responseType = "json";
        request.send(null);
    };
    button.addEventListener('click', e => {
        changeVideo();
    })
}

function changeVideo() {
    if (data.length > 0) {
        titleArea.innerHTML = data[number].title;
        contentArea.innerHTML = data[number].content;
        videoArea.setAttribute("src", data[number].url);
        number === 2 ? number = 0 : number++;
    }
}

window.onload = getData;




/*
let number = 0; // Variable para llevar un seguimiento de la posición actual en el arreglo de datos. Inicializado en 0.
const titleArea = document.getElementById("title"); // Obtiene el elemento con el ID "title" y lo asigna a la variable titleArea.
const contentArea = document.getElementById("content"); // Obtiene el elemento con el ID "content" y lo asigna a la variable contentArea.
const videoArea = document.getElementById("video"); // Obtiene el elemento con el ID "video" y lo asigna a la variable videoArea.
const button = document.getElementById('btn'); // Obtiene el botón con el ID "btn" y lo asigna a la variable button.
function getData() {
    button.addEventListener('click', e => { // Agrega un evento de clic al botón para ejecutar la función cuando se hace clic.
        const request = new XMLHttpRequest(); // Crea una nueva instancia de XMLHttpRequest para hacer la solicitud.
        request.onreadystatechange = function () { // Define una función que se ejecuta cuando cambia el estado de la solicitud.
            if (request.readyState == 4) { // Comprueba si el estado de la solicitud es 4 (completado).
                if (request.status == 200) { // Comprueba si el código de estado de la respuesta es 200 (éxito).
                    titleArea.innerHTML = request.response[number].title; // Actualiza el contenido del elemento con ID "title" con el título correspondiente en el arreglo de datos.
                    contentArea.innerHTML = request.response[number].content; // Actualiza el contenido del elemento con ID "content" con el contenido correspondiente en el arreglo de datos.
                    videoArea.setAttribute("src", request.response[number].url); // Establece el atributo "src" del elemento con ID "video" para mostrar el video correspondiente en el arreglo de datos.
                    number == 2 ? number = 0 : number++; // Actualiza la variable 'number' para cambiar al siguiente conjunto de datos o volver al inicio si se alcanza el final del arreglo.
                }
            }
        }
        request.open("GET", "ajax.json"); // Abre una solicitud GET para obtener datos del archivo "ajax.json".
        request.responseType = "json"; // Configura el tipo de respuesta esperada como JSON.
        request.send(null); // Envía la solicitud al servidor.
    })
}
window.onload = getData; // Ejecuta la función getData() cuando la ventana se ha cargado por completo.
*/
