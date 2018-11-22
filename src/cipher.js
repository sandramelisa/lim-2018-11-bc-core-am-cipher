window.cipher = {

encode:(offset,string)=>{
     let resultado="";
    //Para recorrer cada letra del mensaje ingresado
     for (let i = 0; i < string.length; i++) {
      //charCodeAt--->Para obtener el codigo Ascii de una letra
      //La formula es para obtener la nueva posicion de la palabra en codigo Ascii
      let ascii1=(string.toUpperCase().charCodeAt(i)-65+offset)%26+65;
      //fromCharCode--->Para obtener la letra que corresponde al codigo Ascii
      let letra=String.fromCharCode(ascii1);
      resultado=resultado+letra;
     }
      return resultado;
   },

decode:(offset,string)=>{
      let resultado2="";
     //Para recorrer cada letra del mensaje ingresado
      for (let j = 0; j < string.length; j++) {
       //charCodeAt--->Para obtener el codigo ascii de una letra
       //La formula es para obtener la nueva posicion de la palabra en codigo Ascii
       let ascii2=(string.toUpperCase().charCodeAt(j)-90-offset)%26+90;
       //fromCharCode--->Para obtener la letra que corresponde al codigo Ascii
       let letra2=String.fromCharCode(ascii2);
       resultado2=resultado2+letra2;
      }
       return resultado2;
    }

};
