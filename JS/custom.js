
document.querySelector("#cambiar").onclick=function(){
    resfreshClima(document.querySelector("#provincia").value);
    refresMap(this.value);
    document.getElementById("contenedorMapa").style.display="block";
}