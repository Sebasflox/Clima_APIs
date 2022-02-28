
document.querySelector("#cambiar").onclick=function(){
    document.getElementById("contenedorMapa").style.display="block"
    resfreshClima(document.querySelector("#provincia").value);
    refresMap(document.querySelector("#provincia").value);
    ;
    
}