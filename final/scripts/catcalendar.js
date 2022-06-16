/* CURSO JAVASCRIPT: 
Franco Nicolett (͠◉_◉᷅ )
Com 37110 */

console.log ("Este proyecto aun no esta terminado. Disculpe las molestias");
//SweetAlert
const user  = document.querySelector (".user")
    user.addEventListener("click", ()=>{ 
        Swal.fire({
        title: 'Ese boton aún no esta en funcionamiento. Pardon.',
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'}}) 
    })


        Swal.fire({
        title: 'Los gatitos estan trabajando para completar esta pagina.',
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'}
    }) 
    

API = "https://jsonplaceholder.typicode.com"

const usuariosapi = document.querySelector ("#app");
const ul =document.createElement ("ul");

fetch(`${API}/users`)
.then((response) => response.json ())
.then ((users) => {
    users.forEach((user) => {
        let elem = document.createElement ("li");
        elem.appendChild (
        document.createTextNode (` 
        ${user.name} : ${user.email}`)
        );
        ul.appendChild (elem);
    });
    usuariosapi.appendChild(ul);
})