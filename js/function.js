function convertir(){
    var numero=document.getElementById("numero").value;
    var opcion = document.getElementById("conversion").value;
    var resultado;
    var number=parseInt(numero);
    switch(opcion){
        case "1":{
            resultado=number.toString(2);
            break;
        }
        case "2":{
            resultado=number.toString(16);
            break;
        }
        case "3":{
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

