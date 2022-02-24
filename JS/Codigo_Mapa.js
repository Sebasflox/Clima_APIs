
crearMapa([9.927934834483523, -84.09429120195715], 8);

function crearMapa(coord, zoom) {
    //limpiar el cotenedor de mapa
    $(".mapaContainer").html(`<div id="miMapa"></div>`);

    //generando la vista del mapa    latitud, longitud zoom 
    var mapa = L.map('miMapa').setView(coord, zoom);

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
    var marcador2 = L.marker([10.64465243222477, -85.42935960744244]).addTo(mapa);
    var marcador3 = L.marker([9.83471504861444, -83.92040296292701]).addTo(mapa);
    var marcador4 = L.marker([9.977874376838942, -84.82938784754447]).addTo(mapa);
    var marcador5 = L.marker([10.016333016998823, -84.21514589234808]).addTo(mapa);
    var marcador6 = L.marker([9.998206880603005, -84.11901171084698]).addTo(mapa);
    var marcador7 = L.marker([9.991461727554787, -83.04063337423054]).addTo(mapa);
    marcador1.bindPopup(`
                        <h1>Guanacaste</h1> 
                        <p>Costa Rica</p>
                        `);
    marcador2.bindPopup(`
                        <h1>San Jose</h1> 
                        <p>Soy otro marcador</p>
                        `);
    marcador3.bindPopup(`
                        <h1>Cartago</h1> 
                        <p>Soy otro marcador</p>
                        `);
    marcador4.bindPopup(`
                        <h1>Puntarenas</h1> 
                        <p>Costa Rica</p>
                        `);
    marcador5.bindPopup(`
                        <h1>Alajuela</h1> 
                        <p>Soy otro marcador</p>
                        `);
    marcador6.bindPopup(`
                        <h1>Heredia</h1> 
                        <p>Soy otro marcador</p>
                        `);
    marcador7.bindPopup(`
                        <h1>Limon</h1> 
                        <p>Soy otro marcador</p>
                        `);
}