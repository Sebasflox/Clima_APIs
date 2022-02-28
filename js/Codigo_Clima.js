function resfreshClima(provincia){

    if (provincia=="San_Jose"){
        var lat = 9.938543933578808;
        var long = -84.0969633937918;
    }
    if(provincia=="Alajuela"){
        var lat = 10.015994926927956;
        var long = -84.21445924689671;
    }
    if(provincia=="Cartago"){
        var lat = 9.86302143845792;
        var long = -83.91688551722636;
    }
    if(provincia=="Heredia"){
        var lat = 10.473689889599;
        var long = -84.01708618549425;
    }
    if(provincia=="Guanacaste"){
        var lat = 10.629545059416854;
        var long = -85.44593999484933;
    }
    if(provincia=="Puntarenas"){
        var lat = 9.982056305799318;
        var long = -84.83043792326303;
    }
    if(provincia=="Limon"){
        var lat = 9.990157612958788;
        var long = -83.04023875138913;
    }

    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=997ca64dfebf85c09099afb798ff1341";
    
    $.getJSON(url, function(data) {
        console.log(data);
        document.getElementById("clima").innerHTML=data["weather"][0]["description"];
        document.getElementById("tempa").innerHTML=data["main"]["temp"];
        document.getElementById("humedad").innerHTML=data["main"]["humidity"];
        document.getElementById("viento").innerHTML=data["wind"]["speed"];

    });
    console.log(contenido);
}