// Define una función asíncrona llamada listUsers
const listUsers = async () => {
    // Realiza una petición GET a la API para obtener los usuarios
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // Convierte la respuesta a formato JSON
    const users = await response.json();

    // Inicializa una cadena vacía para almacenar el cuerpo de la tabla HTML
    let tableBody = ``;
    // Itera sobre cada usuario en el array de usuarios
    users.forEach((user, index) => {
        // Agrega una nueva fila a la tabla por cada usuario
        tableBody += `<tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.email}</td>
        <td class='centered'>${user.website}</td>
        </tr>`;
    });
    // La siguiente línea está comentada, pero insertaría el contenido en el elemento con id "tableBody_Users"
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    // Inserta el contenido de la tabla en el elemento con id "tableBody_Users"
    tableBody_Users.innerHTML = tableBody;
};

// Agrega un evento que se ejecuta cuando la página ha terminado de cargar
window.addEventListener("load", function () {
    // Llama a la función listUsers cuando la página se ha cargado completamente
    listUsers();
});
