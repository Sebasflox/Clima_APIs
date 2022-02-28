
crearMapa([9.927934834483523, -84.09429120195715], 8);

document.getElementById("contenedorMapa").style.display = "none";

var mapa;


function crearMapa(coord, zoom) {
    //limpiar el cotenedor de mapa
    $(".mapaContainer").html(`<div id="miMapa"></div>`);

    //generando la vista del mapa latitud, longitud zoom 
    mapa = L.map('miMapa').setView(coord, zoom);

    //crear el layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicnNlcXVlaXJhIiwiYSI6ImNraDByOWZrdjB6ejYyd3BncjM5a2s5ZWgifQ.BKZKvJugnbvE3Pi8PeP4Jw'
    }).addTo(mapa);

}

function refresMap(provincia){
    
    if (provincia == "Alajuela"){
        var Alajuela_m = L.marker([10.015994926927956, -84.21445924689671]).addTo(mapa);
        Alajuela_m.bindPopup(`
                        <h1>AJ</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if (provincia == "Cartago"){
        var Cartago_m = L.marker([9.86302143845792, -83.91688551722636]).addTo(mapa);
        Cartago_m.bindPopup(`
                        <h1>CT</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if (provincia == "Heredia"){
        var Heredia_m = L.marker([10.473689889599, -84.01708618549425]).addTo(mapa);
        Heredia_m.bindPopup(`
                        <h1>AJ</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if (provincia == "Limon"){
        var Limon_m = L.marker([9.990157612958788, -83.04023875138913]).addTo(mapa);
        Limon_m.bindPopup(`
                        <h1>CT</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if (provincia == "Puntarenas"){
        var Puntarenas_m = L.marker([9.982056305799318, -84.83043792326303]).addTo(mapa);
        Puntarenas_m.bindPopup(`
                        <h1>AJ</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if (provincia == "Guanacaste"){
        var Guanacaste_m = L.marker([10.629545059416854, -85.44593999484933]).addTo(mapa);
        Guanacaste_m.bindPopup(`
                        <h1>CT</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if(provincia == "San_Jose"){
        var San_Jose_m = L.marker([9.938543933578808, -84.0969633937918]).addTo(mapa);
        San_Jose_m.bindPopup(`
                            <h1>SJ</h1>
                            <p>Costa Rica</p>
                            `);
    }
}