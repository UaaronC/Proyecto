var n = document.getElementById("nom");

const form = document.getElementById("form1");
var msj = document.getElementById("mensajes");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let msjMostrar = "";
    let envioCorreo = false;

    if(n.value.length <4 ||n.value.length >7){
        msjMostrar += "El nombre no tiene la longitud correcta.<br>"
        envioCorreo = true;
    }

    var letraNombre = n.value.charAt(0);
    if(esMayuscula(letraNombre)){
        msjMostrar += "Es mayuscula<br>";
        envioCorreo = true;
    }

    if(envioCorreo){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "Registro completado con Exito"
    }

});

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}