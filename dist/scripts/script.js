const errorHandler = new ErrorHandler($('#error-container'));

let map,
    mapBounds,
    mapCenter,
    urls = {},
    vs,
    userLocationMarker,
    userLocationInfoView,
    hospitalsLayer,
    redCrossLayer,
    flightAreasLayer,
    selectedMarker,
    directionsService,
    directionsRenderer;

$(function() {
    $('#fluvial-t-10').click(() => {
        if ($('#fluvial-t-10').attr('checked')) {
            $('#fluvial-t-10').removeAttr('checked');
            hideLayer('NZ.Flood.FluvialT10');
        } else {
            $('#fluvial-t-10').attr("checked", "true");
            showLayer(1, 'NZ.Flood.FluvialT10');
        }
    });

    $('#fluvial-t-100').click(() => {
        if ($('#fluvial-t-100').attr('checked')) {
            $('#fluvial-t-100').removeAttr('checked');
            hideLayer('NZ.Flood');
        } else {
            $('#fluvial-t-100').attr("checked", "true");
            showLayer(1, 'NZ.Flood');
        }
    });

    $('#fluvial-t-500').click(() => {
        if ($('#fluvial-t-500').attr('checked')) {
            $('#fluvial-t-500').removeAttr('checked');
            hideLayer('NZ.Flood.FluvialT500');
        } else {
            $('#fluvial-t-500').attr("checked", "true");
            showLayer(1, 'NZ.Flood.FluvialT500');
        }
    });

    $('#marina-t-100').click(() => {
        if ($('#marina-t-100').attr('checked')) {
            $('#marina-t-100').removeAttr('checked');
            hideLayer('NZ.Flood.MarinaT100');
        } else {
            $('#marina-t-100').attr("checked", "true");
            showLayer(1, 'NZ.Flood.MarinaT100');
        }
    });

    $('#marina-t-500').click(() => {
        if ($('#marina-t-500').attr('checked')) {
            $('#marina-t-500').removeAttr('checked');
            hideLayer('NZ.Flood.MarinaT500');
        } else {
            $('#marina-t-500').attr("checked", "true");
            showLayer(1, 'NZ.Flood.MarinaT500');
        }
    });

    $('#fire').click(() => {
        if ($('#fire').attr('checked')) {
            $('#fire').removeAttr('checked');
            hideLayer('Frecuencia de Incendios Forestales');
        } else {
            $('#fire').attr("checked", "true");
            showLayer(2, 'Frecuencia de Incendios Forestales');
        }
    });

    $('#earth-quake-t-10').click(() => {
        if ($('#earth-quake-t-10').attr('checked')) {
            $('#earth-quake-t-10').removeAttr('checked');
            hideLayer('Ultimos10dias');
        } else {
            $('#earth-quake-t-10').attr("checked", "true");
            showLayer(3, 'Ultimos10dias');
        }
    });

    $('#earth-quake-t-30').click(() => {
        if ($('#earth-quake-t-30').attr('checked')) {
            $('#earth-quake-t-30').removeAttr('checked');
            hideLayer('Ultimos30dias');
        } else {
            $('#earth-quake-t-30').attr("checked", "true");
            showLayer(3, 'Ultimos30dias');
        }
    });

    $('#earth-quake-t-365').click(() => {
        if ($('#earth-quake-t-365').attr('checked')) {
            $('#earth-quake-t-365').removeAttr('checked');
            hideLayer('Ultimos365dias');
        } else {
            $('#earth-quake-t-365').attr("checked", "true");
            showLayer(3, 'Ultimos365dias');
        }
    });

    $('#earth-quake').click(() => {
        if ($('#earth-quake').attr('checked')) {
            $('#earth-quake').removeAttr('checked');
            hideLayer('NZ.HazardArea');
        } else {
            $('#earth-quake').attr("checked", "true");
            showLayer(3, 'NZ.HazardArea');
        }
    });

    $('#user-location').click(() => {
        showUserLocation();
    });

    $('#hospitals').click(() => {
        if ($('#hospitals').attr('checked')) {
            $('#hospitals').removeAttr('checked');
            hospitalsLayer.setMap(null);
        } else {
            $('#hospitals').attr("checked", "true");
            hospitalsLayer.setMap(map);
        }
    });

    $('#red-cross').click(() => {
        if ($('#red-cross').attr('checked')) {
            $('#red-cross').removeAttr('checked');
            redCrossLayer.setMap(null);
        } else {
            $('#red-cross').attr("checked", "true");
            redCrossLayer.setMap(map);
        }
    });

    $('#flight-areas').click(() => {
        if ($('#flight-areas').attr('checked')) {
            $('#flight-areas').removeAttr('checked');
            flightAreasLayer.setMap(null);
        } else {
            $('#flight-areas').attr("checked", "true");
            flightAreasLayer.setMap(map);
        }
    });

    $('#show-route').click(() => {
        showRoute();
    });

    $('#clear-route').click(() => {
        clearRoute();
    });
});

function initMap() {
    mapCenter = new google.maps.LatLng(40.428928, -3.704275);
    mapBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(35.676060, -11.319009),
        new google.maps.LatLng(43.969508, 6.131905));
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(($('#map')[0]), {
        center: mapCenter,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    loadWMS();
    loadHospitalsLayer();
    loadRedCrossLayer();
    loadFlightAreasLayer();
}

function loadWMS() {
    vs = new VisualizationSystem();
    for (let i = 0; i < data.length; i++)
        vs.wms.push(new WMS().fromJson(data[i]));
}

function showLayer(id, name) {
    const layer = vs.getWMSById(id).getLayerByName(name);
    urls[name] = layer.url;
    map.overlayMapTypes.push(new google.maps.ImageMapType({
        getTileUrl: layer.showLayer,
        tileSize: new google.maps.Size(256, 256),
        opacity: 0.5,
        name: name
    }));
}

function hideLayer(name) {
    for (let i = 0; i < map.overlayMapTypes.length; i++) {
        if (map.overlayMapTypes.getAt(i).name === name) {
            map.overlayMapTypes.removeAt(i);
            break;
        }
    }
}

function showUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            addMarker(userPosition);
            userLocationInfoView = new google.maps.InfoWindow({
                content: '¡Su ubicación!',
                position: userPosition
            });
            userLocationInfoView.open(map);
        }, () => {
            errorHandler.showInfo('¡La ubicación de su localización ha fallado!', 'error');
        });
    } else {
        errorHandler.showInfo(`¡La ubicación de su localización ha fallado!
            ¡Su navegador no soporta la geolocalización!`, 'error');
    }
}

function addMarker(location) {
    if (!mapBounds.contains(location)) {
        errorHandler.showInfo('¡Su ubicación se encuentra fuera de España!', 'error');
    } else {
        if (!userLocationMarker) {
            userLocationMarker = new google.maps.Marker({
                position: location,
                map: map,
                title: '¡Su ubicación!',
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });
        } else
            userLocationMarker.setPosition(location);
        smoothZoom(map, location, 15, map.getZoom());
        userLocationMarker.addListener('click', function() {
            userLocationInfoView.open(map);
        });
    }
}

function smoothZoom(map, location, targetZoom, actualZoom) {
    map.setCenter(location);
    if (actualZoom >= targetZoom) {
        return;
    } else {
        let z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
            google.maps.event.removeListener(z);
            smoothZoom(map, location, targetZoom, actualZoom + 1);
        });
        setTimeout(() => map.setZoom(actualZoom), 200);
    }
}

function loadHospitalsLayer() {
    hospitalsLayer = new google.maps.KmlLayer({
        url: 'https://drive.google.com/uc?export=download&id=14soF-foQNrNB-Z4_ipYwG73OJs4dzpfv',
        suppressInfoWindows: false,
        preserveViewport: true
    });
    hospitalsLayer.addListener('click', (event) => {
        selectedMarker = event.latLng;
        $('#show-route').removeAttr('disabled');
    });
}

function loadRedCrossLayer() {
    redCrossLayer = new google.maps.KmlLayer({
        url: 'https://drive.google.com/uc?export=download&id=1-aUQmM7woOuAIFIx_TJwrn4E5bLfJrFZ',
        suppressInfoWindows: false,
        preserveViewport: true
    });
    redCrossLayer.addListener('click', (event) => {
        selectedMarker = event.latLng;
        $('#show-route').removeAttr('disabled');
    });
}

function loadFlightAreasLayer() {
    flightAreasLayer = new google.maps.KmlLayer({
        url: 'https://drive.google.com/uc?export=download&id=1GYQPc1CXu5c8ug80iqjIG8cPt6UYdRQl',
        suppressInfoWindows: false,
        preserveViewport: true
    });
    flightAreasLayer.addListener('click', (event) => {
        selectedMarker = event.latLng;
        $('#show-route').removeAttr('disabled');
    });
}

function showRoute() {
    if (!userLocationMarker) {
        errorHandler.showInfo('¡Para calcular una ruta, primero debe indicar su ubicación mediante la correspondiente opción!', 'error');
    } else {
        directionsService.route({
            origin: userLocationMarker.position,
            destination: selectedMarker,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, (response, status) => {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(response);
                directionsRenderer.setMap(map);
                $('#clear-route').removeAttr('disabled');
            }
        });
    }
}

function clearRoute() {
    directionsRenderer.setMap(null);
    selectedMarker = undefined;
    $('#clear-route').attr('disabled', 'true');
    $('#show-route').attr('disabled', 'true');
}