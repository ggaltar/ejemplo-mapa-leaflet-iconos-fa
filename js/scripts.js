	// Mapa Leaflet
	var mapa = L.map('mapid').setView([10, -84], 7);

	// Capa base
	var osm = L.tileLayer(
	  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
	  {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }
	).addTo(mapa);	


	// Marcadores
    // Ícono para ciudades
    //const iconoCiudad = L.divIcon({
      //html: '<i class="fas fa-city fa-2x"></i>',
      //className: 'estiloIconos'
    //});
	
	const iconoCiudad = L.divIcon({
      html: '<i class="fas fa-bicycle fa-3x""></i>',
      className: 'estiloIconos'
    });
	

    liberia = L.marker([10.633333, -85.433333], {icon: iconoCiudad});
	liberia.bindTooltip("Liberia").openTooltip();
	liberia.addTo(mapa);

	limon = L.marker([10.002216, -83.084037], {icon: iconoCiudad});
	limon.bindTooltip("Limón").openTooltip();
	limon.addTo(mapa);	   
	    
	puntarenas = L.marker([9.966667, -84.833333], {icon: iconoCiudad});
	puntarenas.bindTooltip("Puntarenas").openTooltip();
	puntarenas.addTo(mapa);	

	// Conjunto de capas base
	var mapasBase = {
	    "OSM": osm,
        "Stamen": stamen,
        "NatGeo": natgeo,
	    "ESRI": esri		
	};	    
	    
	// Control de capas
    L.control.layers(mapasBase).addTo(mapa);	

    // Control de escala
    L.control.scale({position: "topright"}).addTo(mapa);
