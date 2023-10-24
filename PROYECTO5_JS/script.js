/* Guardar posicion inicial del esqueleto */
let esqueleto="off";
let esqueletoStop=document.getElementById("esqueletoquieto");
let botonSonido=new Audio ('./mp3/botonbailar.mp3')
let botonAudio=new Audio('./mp3/audio.mp3')

function bailar() {
    /* validacion si el esqueleto esta quieto que debe realizar */
    if (esqueleto=="off") {
        esqueleto="on";
        /* Agregamos la nueva clase */
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        });
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        /* Verificación */
        console.log("On");

    }else{
        esqueleto="off"
        /* Parar o eliminar la clase  */
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
        console.log("Off");
    }
}