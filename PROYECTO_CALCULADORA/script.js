const pantalla=document.querySelector(".pantalla")

const botones=document.querySelectorAll(".boton")

botones.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        //console.log(boton.textContent);

        const botonON=boton.textContent;

        //pantalla.textContent=botonON;
        if (boton.id==="limpiar") {
            pantalla.textContent="0";
            return;
        }

        if (boton.id==="borrar") {

            if (pantalla.textContent.length===1) {
                pantalla.textContent="0";
            }else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
          
            return;
        }

        if (boton.id==="igual") {
            try{
                pantalla.textContent=eval(pantalla.textContent);
            }catch{
                pantalla.textContent="¡Error!"
            }

            try { 
                pantalla.textContent=simbol(pantalla.textContent);
                
            } catch {
                pantalla.textContent="¡Error!"
                return;
            }

    
         
            return;
        }


        if (pantalla.textContent==="0"|| pantalla.textContent==="¡Error!") {
            pantalla.textContent=botonON;
            
        }else{
            pantalla.textContent+= botonON;
        }

        if (boton.id==="limpiar") {
            pantalla.textContent="0";
            return;
        }

    

    })
})