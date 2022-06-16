
/* CURSO JAVASCRIPT: 
Franco Nicolett (͠◉_◉᷅ )
Com 37110 */

console.log ("Este proyecto aun no esta terminado. Disculpe las molestias");

    // Libreria Toastify
    function IngresoThundercat(){ Toastify ({
        text: "Thundercat Ingresado",
        offset: { x: 50,
                  y: 10,}
    }).showToast();
    }
//SweetAlert
const user  = document.querySelector (".user")
    user.addEventListener("click", ()=>{ 
        Swal.fire({
        title: 'Ese boton aún no esta en funcionamiento. Pardon.',
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'}}) 
    })

// STORAGE
sessionStorage.setItem ("legajos", ["007","001","002","006","003"])
let legajosGuardados = sessionStorage.getItem ("legajos").split(",")
console.log ("Los numeros de lagajos para el ChekIn son: " + (legajosGuardados))

//Array de empleadxs
    const empleadxs = 
                    [{ legajo: "007",  nombre: "Lion-O", foto: "" },
                    {  legajo: "001",  nombre: "Cheetara", foto: "" },
                    {  legajo: "002",  nombre: "Panthro"  , foto: ""},
                    {  legajo: "006",  nombre: "Tigro"  , foto: ""},
                    {  legajo: "003",  nombre: "Pumara" , foto: ""}];

let formulario = document.querySelector ("#form");
const employeesList = document.querySelector ("#employeesList");
const listaActivos = document.querySelector ("#listaActivos") 
let legajo = document.querySelector(".legajo_legajo")

formulario.addEventListener ("submit", (validarFormulario)=>{
    validarFormulario.preventDefault ();
    
        if (legajo.value ==="007"){
        ingresados = empleadxs.filter ((el) => el.legajo === "007")
        for (const empleadxs of ingresados) {
            IngresoThundercat ();
            let listaActivos = document.createElement ("div");
            listaActivos.className = "activos"
        listaActivos.innerHTML = `
                                    <p> <b>Legajo:</b> ${empleadxs.legajo} <b>Empleadx:</b> ${empleadxs.nombre }   </p> <img src="img/staff/Lion-O.png" alt="ejemplo" width="50px" >
                                `;
                                    employeesList.appendChild(listaActivos);
                                   
        }
    }
    if (legajo.value ==="001"){
        ingresados = empleadxs.filter ((el) => el.legajo === "001")
        for (const empleadxs of ingresados) {
            IngresoThundercat()
            let listaActivos = document.createElement ("div");
            listaActivos.className = "activos"
        listaActivos.innerHTML = `
                                    <p> <b>Legajo:</b> ${empleadxs.legajo} <b>Empleadx:</b> ${empleadxs.nombre }   </p>   <img src="img/staff/Cheetara.jpg" alt="ejemplo" width="50px" >
                                `;
                                    employeesList.appendChild(listaActivos);
        }
    }
    if (legajo.value ==="002"){
        ingresados = empleadxs.filter ((el) => el.legajo === "002")
        for (const empleadxs of ingresados) {
            IngresoThundercat()
            let listaActivos = document.createElement ("div");
            listaActivos.className = "activos"
        listaActivos.innerHTML = `
                                    <p> <b>Legajo:</b> ${empleadxs.legajo} <b>Empleadx:</b> ${empleadxs.nombre }   </p>   <img src="img/staff/Panthro.jpg" alt="ejemplo" width="50px" >
                                `;
                                    employeesList.appendChild(listaActivos);
        }
    }
    if (legajo.value ==="006"){
        ingresados = empleadxs.filter ((el) => el.legajo === "006")
        for (const empleadxs of ingresados) {
            IngresoThundercat()
            let listaActivos = document.createElement ("div");
            listaActivos.className = "activos"
        listaActivos.innerHTML = `
                                    <p> <b>Legajo:</b> ${empleadxs.legajo} <b>Empleadx:</b> ${empleadxs.nombre }   </p>   <img src="img/staff/Tigro.jpg" alt="ejemplo" width="50px" >
                                `;
                                    employeesList.appendChild(listaActivos);
        }
    }
    if (legajo.value ==="003"){
        ingresados = empleadxs.filter ((el) => el.legajo === "003")
        for (const empleadxs of ingresados) {
            IngresoThundercat()
            let listaActivos = document.createElement ("div");
            listaActivos.className = "activos"
        listaActivos.innerHTML = `
                                    <p> <b>Legajo:</b> ${empleadxs.legajo} <b>Empleadx:</b> ${empleadxs.nombre }   </p>   <img src="img/staff/Pumara.jpg" alt="ejemplo" width="50px" >
                                `;
                                    employeesList.appendChild(listaActivos);
        }
    }
});
                    //RESOLVER QUE AL DIGITAR DE NUEVO SE BORRE el ingresado


/* Por hacer:
    -Meter a los thundercats seleccionables en un menu desplegable.
    -Al introducir el legajo deberia tomar el horario de entrada, y al introducirlo nuevamente el horario de sallegajoa, obteniendo el resultado del mismo y guardandolo en algun lado. (storage?)
    POSTERIOR A ESO:
    -Al selecionar "personal" deberian poder visualizarse los datos de cada uno de los integrantes del personal
    -Al seleccionar horarios deberia existir una grilla horaria, la misma puede ser un excel o algo asi */
