function convertir(){
    var numero=document.getElementById("numero").value;
    var opcion = document.getElementById("conversion").value;
    var resultado;
    switch(opcion){
        case "1":{
            var number=parseInt(numero);
            resultado=number.toString(2);
           
            break;
        }
        case "2":{
            var number=parseInt(numero);
            resultado=number.toString(16);
            break;
        }
        case "3":{
            var number=parseInt(numero);
            resultado=number.toString(8);
            break;
        }
        case "4":{
            resultado=parseInt(numero,2);
            break;
        }
        case "5":{
            resultado=parseInt(numero,16);
            break;
        }
        case "6":{
            resultado=parseInt(numero,8);
            break;
        }
        default :{break;}
    }
    document.getElementById("resultado").value=resultado;

}

