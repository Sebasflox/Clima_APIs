
document.querySelector("#cambiar").onclick=function(){
    resfreshClima(document.querySelector("#provincia").value);
    refresMap(document.querySelector("#provincia").value);
    document.getElementById("contenedorMapa").style.display="block";
}