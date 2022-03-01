
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
    
    mapa.remove();
    crearMapa([9.927934834483523, -84.09429120195715], 8);

    if (provincia == "Alajuela"){
        var Alajuela_m = L.marker([10.015994926927956, -84.21445924689671]).addTo(mapa);
        Alajuela_m.bindPopup(`
                        <h1>Alajuela</h1>
                        <p>Rescate Wildlife Rescue Center</p>
                        <p>Laguna de Hule</p>
                        <p>City Mall</p>
                        `);
    }
    if (provincia == "Cartago"){
        var Cartago_m = L.marker([9.86302143845792, -83.91688551722636]).addTo(mapa);
        Cartago_m.bindPopup(`
                        <h1>Cartago</h1>
                        <p>Volcan Irazu</p>
                        <p>Pacuare River</p>
                        <p>Jardin Botanico Lankester</p>
                        `);
    }
    if (provincia == "Heredia"){
        var Heredia_m = L.marker([9.998128242157756, -84.11977674989349]).addTo(mapa);
        Heredia_m.bindPopup(`
                        <h1>Heredia</h1>
                        <p>Britt Coffee Tour</p>
                        <p>Museo Cultural Popular</p>
                        <p>Oxigeno Human Playground</p>
                        `);
    }
    if (provincia == "Limon"){
        var Limon_m = L.marker([9.990157612958788, -83.04023875138913]).addTo(mapa);
        Limon_m.bindPopup(`
                        <h1>Limon</h1>
                        <p>Parque Nacional Tortuguero</p>
                        <p>Playa Puerto Viejo</p>
                        <p>Chocorart</p>
                        `);
    }
    if (provincia == "Puntarenas"){
        var Puntarenas_m = L.marker([9.982056305799318, -84.83043792326303]).addTo(mapa);
        Puntarenas_m.bindPopup(`
                        <h1>Puntarenas</h1>
                        <p>Isla Tortuga</p>
                        <p>Reserva Curú</p>
                        <p>Parque Marino del Pacifico</p>
                        `);
    }
    if (provincia == "Guanacaste"){
        var Guanacaste_m = L.marker([10.629545059416854, -85.44593999484933]).addTo(mapa);
        Guanacaste_m.bindPopup(`
                        <h1>Guanacaste</h1>
                        <p>Playa Conchal</p>
                        <p>Monumento Nacional El Farallón</p>
                        <p>EcoMuseo de las minas de abangares</p>
                        `);
    }
    if(provincia == "San_Jose"){
        var San_Jose_m = L.marker([9.938543933578808, -84.0969633937918]).addTo(mapa);
        San_Jose_m.bindPopup(`
                        <h1>San José</h1>
                        <p>Museo Nacional</p>
                        <p>Parque Braulio Carrillo</p>
                        <p>Museo de Jade</p>
                        `);
    }


}