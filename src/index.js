


function encode(mensajeInicial,clave){
   let resultado="";
  //Para recorrer cada letra del mensaje ingresado
   for (let i = 0; i < mensajeInicial.length; i++) {
    //charCodeAt--->Para obtener el codigo Ascii de una letra
    //La formula es para obtener la nueva posicion de la palabra en codigo Ascii
    let ascii1=(mensajeInicial.toUpperCase().charCodeAt(i)-65+clave)%26+65;
    //fromCharCode--->Para obtener la letra que corresponde al codigo Ascii
    let letra=String.fromCharCode(ascii1);
    resultado=resultado+letra;
   }
    return resultado;
 }

//DOM llamas a los elementos
//function()=--->

//getElementById-->para relacionar las etiquetas del html con el JS

// boton q desencadena el evento
const botonCifrar=document.getElementById("bcifrar");
//llama los argumentos dom
const mensajeFinal=function(){
    const mensaje1=document.getElementById("mensajePlano").value;
    const desplazamiento=parseInt(document.getElementById("offset").value);
    //meter los argumentos en la funcion que ya cree
    const output = encode(mensaje1,desplazamiento);
    document.getElementById("resultadoC").value=output;
}

botonCifrar.addEventListener("click",mensajeFinal);
