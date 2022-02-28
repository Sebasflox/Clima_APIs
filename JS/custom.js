
document.querySelector("#cambiar").onclick=function(){
    resfreshClima(this.value);
    refresMap(this.value);
    document.getElementById("contenedorMapa").style.display="block";
}