const API_KEY = "AYgkbKxGK4E8zM9r7MQtLaQDLig7pOKVRr1-KwZAoDE";
// guardo en una constante la key para acceder a la api
const ContenedorImagen = document.getElementById("mostrarImagen");
//traigo el contenedor
const botonBuscar = document.getElementById("botonBuscar");

botonBuscar.addEventListener('click', () => {
    const terminoDeBusqueda = document.getElementById("buscadorImagen");
    const Busqueda = terminoDeBusqueda.value;
    const API_URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=${Busqueda}`;
    // guardo la url a la cual le hare la consulta, le agrego la key al final del string

    fetch(API_URL).then(response => response.json())
        .then(data => {
            // obtengo la URL de la foto aleatoria
            const randomPhotoUrl = data.urls.regular;

            // Crea un elemento de imagen en tu página y establece la URL de la foto
            const imgElement = document.createElement('img');
            imgElement.src = randomPhotoUrl;
            //Elimina la imagen anterior
            ContenedorImagen.innerHTML = ""
            // Agrega la imagen a tu página
            ContenedorImagen.appendChild(imgElement);
        })
        .catch(error => {
            console.error('Error al obtener la foto aleatoria:', error);
        });
})



