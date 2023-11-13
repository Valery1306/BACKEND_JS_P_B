const body=document.querySelector("body");
const toggle=document.getElementById("toggle");

/* el metodo toggle() permite que al elemento que lo asigne le de un valor falso y cuando se llame se vuelva verdadero */

toggle.addEventListener('click', ()=>{
    /* Variación de OFF Y ON */
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
})