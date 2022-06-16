/* CURSO JAVASCRIPT: 
Franco Nicolett (͠◉_◉᷅ )
Com 37110 */

console.log ("Este proyecto aun no esta terminado. Disculpe las molestias")

//SweetAlert
const user  = document.querySelector (".user")
    user.addEventListener("click", ()=>{ 
        Swal.fire({
        title: 'Ese boton aún no esta en funcionamiento. Pardon.',
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'}}) 
    })

// Declaracion de variables
const horarios = document.querySelector ("#horarios")
const personal  = document.querySelector ("#personal")
const Cheetara  = document.querySelector ("#Cheetara")
const LionO  = document.querySelector ("#LionO")
const Panthro  = document.querySelector ("#Panthro")
const Tigro  = document.querySelector ("#Tigro")
const Pumara  = document.querySelector ("#Pumara")





//OBJETOS: con el metodo constructor inauguro la data de cada empleadx
class catsEmployee{ 
    constructor (foto, nombre, affiliation, weapon, legajo, history, salario){
    this.foto = foto;
    this.nombre = nombre;
    this.affiliation = affiliation;
    this.weapon = weapon;
    this.legajo = legajo;
    this.history = history;
    this.salario = salario; 
    }  
}
// ARRAYS: ahora le agrego la info de cada uno de lxs empleados gatitxs.

const catsEmployeeProfiles = [] 
    catsEmployeeProfiles.push (new catsEmployee( "", "Lion-O", "ThunderCats", "Sword of Omens y Claw Shield", "007", "Lion-O is the son of Claudus, and is the leader and hereditary (Lord of the ThunderCats). His adventures are shown from childhood to adulthood on Third Earth and New Thundera, together with his friends and followers, the ThunderCats.", "3900000" ))
    catsEmployeeProfiles.push (new catsEmployee("", "Cheetara", "ThunderCats", "Staff", "001", "Cheetara es una Thunderiana que escapó junto con León-O a la explosión de Thundera, su arma principal es un Bastón Bo, y tiene mucha velocidad.  Basado en una guepardo con una forma humanoide física antropomorfa, junto con una complexión atlética. Ella se ve normalmente usando un leotardo de una sola pieza de color naranja que tiene su emblema Thundercat en el frente de su pecho.", "3000000" ))
    catsEmployeeProfiles.push(new catsEmployee("", "Panthro", "ThunderCats", "Nunchucks", "002", "Panthro is a male Thunderian noble and member of the ThunderCats. His only weakness is his fear of bats. He is the next noble and also the second eldest after Jaga (until Lynx-O is introduced), this warrior is the chief mechanic/engineer and pilot for the ThunderCats.", "3000000" ))
    catsEmployeeProfiles.push(new catsEmployee("", "Tigro", "ThunderCats", "Bolo-Whip", "006", "Tigro, es un thundercat, que posee un látigo y su personaje está basado en el Tigre. Era un varón Thunderiano , arquitecto, científico y miembro de la nobleza de los ThunderCats. Se puede llegar a ser invisible, sin embargo, esto no le impide ser visto por los fuertes suficientes detectores. Junto con la capacidad de volverse invisible, que está armado con un gran látigo de bolo . Él es también el líder del Consejo de Thundercats, a pesar de que León-O está al mando.", "3200000" ))
    catsEmployeeProfiles.push (new catsEmployee("", "Pumara", "ThunderCats", "Whipcord", "003", "Es una joven thunderiana que es curandera y que en algún momento de la destrucción de Thundera, escapó con Bengalí y Lyxn-O, luego de que la Nave Real partiera con los ThunderCats ahora conocidos, es la única Thundercat que se le iluminan los ojos en la oscuridad, es amiga de Cheetara, y se ha vinculado un romance más probable en Tigro y Bengalí. Es la segunda thunderiana adulta, pero menor a Cheetara.", "2500000" ))


// INGRESE NOMBRE DE THUNDERCAT (entrega1)

        Cheetara.addEventListener("click", ()=>{ 
            // cambioToast ();
            var filter = catsEmployeeProfiles.filter ((el) => el.nombre === "Cheetara")
            for (const catsEmployee of filter) {
            
                    let empleadxImg= document.querySelector(".empleadxImg");
                    empleadxImg.innerHTML =`
                            <img src="img/staff/Cheetara.jpg" alt="ejemplo" width="100%" >`;
                    // employeesList.appendChild(empleadxImg);
                    
                    let nombre = document.querySelector (".nombre");
                    nombre.innerHTML =`<h2 class="nombre" >Cheetara</h2>`;
                    // nombre.appendChild(nombre);

            let infoPersonal = document.querySelector(".infoPersonal"); 
                infoPersonal.innerHTML = `

                            <p id="affiliation" class="info">
                            <span>Affiliation:</span> 
                            ${catsEmployee.affiliation}
                        </p>
                        <p id="weapon" class="info">
                            <span>Weapon(s):</span> 
                            ${catsEmployee.weapon} 
                        </p>
                        <p id="legajo" class="info">
                            <span>Legajo:</span>
                            ${catsEmployee.legajo}
                        </p>
                        <p id="salario" class="info">
                            <span>Salario</span>
                            ${catsEmployee.salario}
                        </p>               
                        `;
                // employeesList.appendChild(infoPersonal);
            
            let sobreTi = document.querySelector(".sobreTi");
                sobreTi.innerHTML =` 
                        <p>${catsEmployee.history}</p>`;
                // employeesData.appendChild(sobreTi);
        
        }});

        LionO.addEventListener("click", ()=>{ 
            // cambioToast ();
            var filter = catsEmployeeProfiles.filter ((el) => el.nombre === "Lion-O")
            for (const catsEmployee of filter) {
            
                    let empleadxImg= document.querySelector(".empleadxImg");
                    empleadxImg.innerHTML =`
                            <img src="img/staff/Lion-O.png"  alt="ejemplo" width="100%" >`;
                    // employeesList.appendChild(empleadxImg);
                    
                    let nombre = document.querySelector (".nombre");
                    nombre.innerHTML =`<h2 class="nombre" >Cheetara</h2>`;
                    // nombre.appendChild(nombre);

            let infoPersonal = document.querySelector(".infoPersonal"); 
                infoPersonal.innerHTML = `

                            <p id="affiliation" class="info">
                            <span>Affiliation:</span> 
                            ${catsEmployee.affiliation}
                        </p>
                        <p id="weapon" class="info">
                            <span>Weapon(s):</span> 
                            ${catsEmployee.weapon} 
                        </p>
                        <p id="legajo" class="info">
                            <span>Legajo:</span>
                            ${catsEmployee.legajo}
                        </p>
                        <p id="salario" class="info">
                            <span>Salario</span>
                            ${catsEmployee.salario}
                        </p>               
                        `;
                // employeesList.appendChild(infoPersonal);
            
            let sobreTi = document.querySelector(".sobreTi");
                sobreTi.innerHTML =` 
                        <p>${catsEmployee.history}</p>`;
                // employeesData.appendChild(sobreTi);
        
        }});
        Panthro.addEventListener("click", ()=>{ 
            // cambioToast ();
            var filter = catsEmployeeProfiles.filter ((el) => el.nombre === "Panthro")
            for (const catsEmployee of filter) {
            
                    let empleadxImg= document.querySelector(".empleadxImg");
                    empleadxImg.innerHTML =`
                            <img src="img/staff/Panthro.jpg"  alt="ejemplo" width="100%" >`;
                    // employeesList.appendChild(empleadxImg);
                    
                    let nombre = document.querySelector (".nombre");
                    nombre.innerHTML =`<h2 class="nombre" >Cheetara</h2>`;
                    // nombre.appendChild(nombre);

            let infoPersonal = document.querySelector(".infoPersonal"); 
                infoPersonal.innerHTML = `

                            <p id="affiliation" class="info">
                            <span>Affiliation:</span> 
                            ${catsEmployee.affiliation}
                        </p>
                        <p id="weapon" class="info">
                            <span>Weapon(s):</span> 
                            ${catsEmployee.weapon} 
                        </p>
                        <p id="legajo" class="info">
                            <span>Legajo:</span>
                            ${catsEmployee.legajo}
                        </p>
                        <p id="salario" class="info">
                            <span>Salario</span>
                            ${catsEmployee.salario}
                        </p>               
                        `;
                // employeesList.appendChild(infoPersonal);
            
            let sobreTi = document.querySelector(".sobreTi");
                sobreTi.innerHTML =` 
                        <p>${catsEmployee.history}</p>`;
                // employeesData.appendChild(sobreTi);
        
        }});
        Tigro.addEventListener("click", ()=>{ 
            // cambioToast ();
            var filter = catsEmployeeProfiles.filter ((el) => el.nombre === "Tigro")
            for (const catsEmployee of filter) {
            
                    let empleadxImg= document.querySelector(".empleadxImg");
                    empleadxImg.innerHTML =`
                            <img src="img/staff/Tigro.jpg"  alt="ejemplo" width="100%" >`;
                    // employeesList.appendChild(empleadxImg);
                    
                    let nombre = document.querySelector (".nombre");
                    nombre.innerHTML =`<h2 class="nombre" >Cheetara</h2>`;
                    // nombre.appendChild(nombre);

            let infoPersonal = document.querySelector(".infoPersonal"); 
                infoPersonal.innerHTML = `

                            <p id="affiliation" class="info">
                            <span>Affiliation:</span> 
                            ${catsEmployee.affiliation}
                        </p>
                        <p id="weapon" class="info">
                            <span>Weapon(s):</span> 
                            ${catsEmployee.weapon} 
                        </p>
                        <p id="legajo" class="info">
                            <span>Legajo:</span>
                            ${catsEmployee.legajo}
                        </p>
                        <p id="salario" class="info">
                            <span>Salario</span>
                            ${catsEmployee.salario}
                        </p>               
                        `;
                // employeesList.appendChild(infoPersonal);
            
            let sobreTi = document.querySelector(".sobreTi");
                sobreTi.innerHTML =` 
                        <p>${catsEmployee.history}</p>`;
                // employeesData.appendChild(sobreTi);
        
        }});
        Pumara.addEventListener("click", ()=>{ 
            // cambioToast ();
            var filter = catsEmployeeProfiles.filter ((el) => el.nombre === "Pumara")
            for (const catsEmployee of filter) {
            
                    let empleadxImg= document.querySelector(".empleadxImg");
                    empleadxImg.innerHTML =`
                            <img src="img/staff/Pumara.jpg"  alt="ejemplo" width="100%" >`;
                    // employeesList.appendChild(empleadxImg);
                    
                    let nombre = document.querySelector (".nombre");
                    nombre.innerHTML =`<h2 class="nombre" >Cheetara</h2>`;
                    // nombre.appendChild(nombre);

            let infoPersonal = document.querySelector(".infoPersonal"); 
                infoPersonal.innerHTML = `

                            <p id="affiliation" class="info">
                            <span>Affiliation:</span> 
                            ${catsEmployee.affiliation}
                        </p>
                        <p id="weapon" class="info">
                            <span>Weapon(s):</span> 
                            ${catsEmployee.weapon} 
                        </p>
                        <p id="legajo" class="info">
                            <span>Legajo:</span>
                            ${catsEmployee.legajo}
                        </p>
                        <p id="salario" class="info">
                            <span>Salario</span>
                            ${catsEmployee.salario}
                        </p>               
                        `;
                // employeesList.appendChild(infoPersonal);
            
            let sobreTi = document.querySelector(".sobreTi");
                sobreTi.innerHTML =` 
                        <p>${catsEmployee.history}</p>`;
                // employeesData.appendChild(sobreTi);
        
        }});
 