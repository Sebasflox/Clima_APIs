function resfreshClima(provincia){

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+provincia+",cr&appid=997ca64dfebf85c09099afb798ff1341&lang=sp";
    
    $.getJSON(url, function(data) {
        console.log(data);
        document.getElementById("clima").innerHTML=data["weather"][0]["description"];
        document.getElementById("tempa").innerHTML=data["main"]["temp"];
        document.getElementById("humedad").innerHTML=data["main"]["humidity"];
        document.getElementById("viento").innerHTML=data["wind"]["speed"];

    });
}