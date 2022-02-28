
crearMapa([9.927934834483523, -84.09429120195715], 8);

document.getElementById("contenedorMapa").style.display = "none";

var mapa;


function crearMapa(coord, zoom) {
    //limpiar el cotenedor de mapa
    $(".mapaContainer").html(`<div id="miMapa"></div>`);

    //generando la vista del mapa    latitud, longitud zoom 
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

    var marcador1 = L.marker(coord).addTo(mapa);


    marcador1.bindPopup(`
                        <h1>SJ</h1>
                        <p>Costa Rica</p>
                        `);


}

function refresMap(provincia){
    if (provincia == "Alajuela"){
        var Alajuela_m = L.marker(10.015994926927956).addTo(-84.21445924689671);
        Alajuela_m.bindPopup(`
                        <h1>AJ</h1>
                        <p>Costa Rica</p>
                        `);
    }
    if (provincia == "Cartago"){
        var Cartago_m = L.marker(9.86302143845792).addTo(-83.91688551722636);
        Cartago_m.bindPopup(`
                        <h1>CT</h1>
                        <p>Costa Rica</p>
                        `);
    }

}