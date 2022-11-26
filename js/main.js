//Realizado por Manuel Alexander Ajanel Jerónimo

//Se asigna la selección
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let res = document.querySelector("#res")


//Evento. si se pulsa "+" (Incrementar)
inc.addEventListener("click", function () {
    //ncontador corresponde a la etiqueta span que muestra el número
    let ncontador = document.querySelector("#contador");
    //se realiza la operación convirtiendo el dato a número
    let num = Number(ncontador.innerText) + 1;

    //condiciones para cambio de color
    if(num==0){  
        ncontador.style.backgroundColor = "SLATEGRAY"
    }

    if(num>0){  
        ncontador.style.backgroundColor = "GREEN"
    }

    //Se muestra el número en la etiqueta span
    ncontador.innerText = num;
  
});

//Evento. si se pulsa "-" (Decrementar)
dec.addEventListener("click", function () {
    let ncontador = document.querySelector("#contador");
    let num = Number(ncontador.innerText) - 1;

    if(num==0){  
        ncontador.style.backgroundColor = "SLATEGRAY"
    }

    if(num<0){  
        ncontador.style.backgroundColor = "RED"
    }

    ncontador.innerText = num;

});

//Evento. si se pulsa "Reiniciar"
res.addEventListener("click",function() {
    let ncontador = document.querySelector("#contador");
    //Se le asigna el 0
    let num = 0;

    //Se muestra en pantalla el 0 junto con su cambio de color
    ncontador.style.backgroundColor = "SLATEGRAY"
    ncontador.innerText = num;

});
