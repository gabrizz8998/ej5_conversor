var texto=document.getElementById("numero");

function convertir(){
    var numero=texto.value;
    
    var opcion = document.getElementById("conversion").value;
    //alert(numero);
    //alert(opcion);
    var resultado;
    switch(opcion){
        case "Decimal_binario":{
            //alert("Decimal_binario")
            var number=parseInt(numero);
            alert(numero.toString(2))
            //resultado=numero.toString(2);
           // alert(resultado);
            break;
        }
        case "Decimal_hexadecimal":{
            //alert("Decimal_hexadecimal")
            resultado=numero.toString(16);
            alert(resultado);
            break;
        }
        case "Decimal_octal":{
            //alert("Decimal_octal")
            resultado=numero.toString(8);
            alert(resultado);
            break;
        }
        case "Binario_decimal":{
            //alert("Binario_decimal")
            resultado=parseInt(numero,2);
            alert(resultado);
            break;
        }
        case "Hexadecimal_decimal":{
            //alert("Hexadecimal_decimal")
            resultado=parseInt(numero,16);
            alert(resultado);
            break;
        }
        case "Octal_decimal":{
            //alert("Octal_decimal")
            resultado=parseInt(numero,8);
            alert(resultado);
            break;
        }
        default :{break;}
    }
    alert(resultado);

}

