let eventos=[];
let arr=[];

const nombreEvento=document.querySelector("#nombreEvento");
const fechaEvento=document.querySelector("#fechaEvento");
const botonAgregar=document.querySelector("#agregar");
const listaEventos=document.querySelector("#listaEventos");


/* traera lo que esta almacenado en el localStore */
const json=cargar();

/* verificar si algo en el localstore */
try {
    arr=JSON.parse(json);
} catch (error) {
    /* si no hay nada deje el evento en cero */
    arr=[]
}

/* vaya sumando al arreglo */
eventos=arr? [...arr] :[];

mostrarEventos();

/* llamar a todo el formulario */
document.querySelector("form").addEventListener("submit", e =>{
    /* limpiar las cajas tipo texto */
    e.preventDefault();
    /* FUNCION */
    agregarEvento();
});

function agregarEvento() {
    /* Cuando no se agregue nada */
    if (nombreEvento.value==="" || fechaEvento.value==="") {
        return;
    }
/* INFERIOR A LA FECHA ACTUAL */
    if (diferenciaFecha(fechaEvento.value)<0) {
        return;
    }

    const nuevoEvento={
        /* id automaticamente */
        /* funcion elige un numero al azar (el rango puede ser cualquiera) */
        id:(Math.random()*100).toString(36).slice(3),
        /* nombre guardado en variable */
        nombre:nombreEvento.value,
        /* fecha */
        fecha:fechaEvento.value,
    }
    /* porfa guarda en el arreglo la caja nuevoEvento */
    eventos.unshift(nuevoEvento);

    guardar(JSON.stringify(eventos));

    /* Cuando guarde me deje libre otra vez para crear el siguiente */
    nombreEvento.value="";

    /* despues de que realice ese proceso me muestre los eventos */
    mostrarEventos();
}


function diferenciaFecha(destino) {
    /* fecha que el usuario ingresa */
    let fechaDestino=new Date(destino);
    /* fecha actual del sistema */
    let fechaActual=new Date();
    /* revise cuando dias hay de diferencia */
    let diferencia=fechaDestino.getTime()-fechaActual.getTime();
    /* aproximar al numero mas cercano */
    /* numeros enteros */
    let dias=Math.ceil(diferencia/(1000*3600*24))
    return dias;
}

function mostrarEventos() {
    /* map permite dibujar y mostrar el arreglo en el html */
    const eventosHTML=eventos.map((evento)=>{
        return `
        <div class="evento">
        <div class="dias">

        <span class="diasFaltantes">${diferenciaFecha(evento.fecha)}</span>

        <span class="texto">días para</span>
        </div>

        <div class="nombreEvento">${evento.nombre}</div>

        <div class="fechaEvento">${evento.fecha}</div>

        <div class="acciones">
            <button data-id="${evento.id}" class="eliminar">Eliminar</button>
        </div>

        </div>
        
        `;
    });

    listaEventos.innerHTML=eventosHTML.join("");
    document.querySelectorAll('.eliminar').forEach(button=>{
        /* cuando escuche eñ click vaya y busque el id */
        button.addEventListener("click", e =>{
            const id=button.getAttribute('data-id');
            /* filtro para que eliminde el id */
            eventos=eventos.filter(evento=>evento.id !== id);

            /* guardar los datos */
            guardar(JSON.stringify(eventos));


            mostrarEventos();
        });
    });

}

function guardar(datos) {
    /* almacenamiento para guardar en el localstrore */
    localStorage.setItem("lista", datos);
}

function cargar() {
    return localStorage.getItem("lista")
 
}