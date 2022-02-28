


function resfreshClima(provincia){

    let Contenido = provincia;

    if (Contenido="San_Jose"){
        var lat = 10;
        var long = -85;
    }
    
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=997ca64dfebf85c09099afb798ff1341";

    $.getJSON(url, function(data) {
        console.log(data);
        document.getElementById("clima").innerHTML=data["weather"][0]["description"];
    });
}