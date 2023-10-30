/* marco del puntaje constante */
const marcoPuntaje=document.querySelector('.puntaje')
let puntajeActual=0;
const puntajeLimite=5;

/* Div adicionales mapeo*/
const htmlMapa=Array.from(Array(puntajeLimite)).map((item, i)=>{
    /* Constuya una division segun puntajeLimite */
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

marcoPuntaje.innerHTML=htmlMapa.join("");
/* Recorrer clase */
document.querySelectorAll(".item").forEach(item=>{
    item.addEventListener("mouseover", e=>{
        console.log("funciona ")
        /* Capture la posicion */
        const posicion=item.getAttribute("data-pos");

    document.querySelectorAll(".item").forEach(cuadraditoGris=>{
        if (cuadraditoGris.classList.contains("selec")) {
            cuadraditoGris.classList.remove("selec");
        }
    });

    if (puntajeActual===parseInt(posicion)+1) {
        return;
    }

        /* for depende de la posicion, ese es su limite */
        for (let i = 0; i <= posicion; i++) {
            /* const para guardar indice del item */
            const cuadradito = document.querySelector(`.item-${i}`);

            /* validación */
            if (!cuadradito.classList.contains("selec")) {
                cuadradito.classList.add("selec");
            }
            
        }
        puntajeActual=parseInt(posicion)+1;
    });

    item.addEventListener("click",(e)=>{
        const posicion=item.getAttribute("data-pos");
        puntajeActual=parseInt(posicion)+1;
        console.log(puntajeActual);

    })
})