

//DOM llamas a los elementos
//function()=--->

//getElementById-->para relacionar las etiquetas del html con el JS

// boton q desencadena el evento
const botonCifrar=document.getElementById("bcifrar");
//llama los argumentos dom
const mensajeFinal=function(){
    const mensaje1=document.getElementById("mensajePlano").value;
    const desplazamiento=parseInt(document.getElementById("clave").value);
    //meter los argumentos en la funcion que ya cree
    const output = cipher.encode(desplazamiento,mensaje1);
    document.getElementById("resultadoC").value=output;
}

botonCifrar.addEventListener("click",mensajeFinal);


//DOM llamas a los elementos
//function()=--->

//getElementById-->para relacionar las etiquetas del html con el JS

// boton q desencadena el evento
const botonDescifrar=document.getElementById("bdescifrar");
//llama los argumentos dom
const mensajeFinal2=function(){
    const mensaje2=document.getElementById("mensajePlano").value;
    const desplazamiento2=parseInt(document.getElementById("clave").value);
    //meter los argumentos en la funcion que ya cree
    const output2 = cipher.decode(desplazamiento2,mensaje2);
    document.getElementById("resultadoC").value=output2;
}

botonDescifrar.addEventListener("click",mensajeFinal2);
