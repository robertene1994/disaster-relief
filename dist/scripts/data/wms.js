const data = [{
    "id": 1,
    "description": "Inundaciones",
    "layers": [{
            "description": "Últimos 10 Años (Fluvial)",
            "name": "NZ.Flood.FluvialT10",
            "url": "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.Flood.FluvialT10&WIDTH=256&HEIGHT=256&STYLES=default&FORMAT=image/png&TRANSPARENT=TRUE"
        },
        {
            "description": "Últimos 100 Años (Fluvial)",
            "name": "NZ.Flood",
            "url": "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.Flood&WIDTH=256&HEIGHT=256&STYLES=default&FORMAT=image/png&TRANSPARENT=TRUE"
        },
        {
            "description": "Últimos 500 Años (Fluvial)",
            "name": "NZ.Flood.FluvialT500",
            "url": "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.Flood.FluvialT500&WIDTH=256&HEIGHT=256&STYLES=default&FORMAT=image/png&TRANSPARENT=TRUE"
        },
        {
            "description": "Últimos 100 Años (Marina)",
            "name": "NZ.Flood.MarinaT100",
            "url": "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.Flood.MarinaT100&WIDTH=256&HEIGHT=256&STYLES=default&FORMAT=image/png&TRANSPARENT=TRUE"
        },
        {
            "description": "Últimos 500 Años (Marina)",
            "name": "NZ.Flood.MarinaT500",
            "url": "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.Flood.MarinaT500&WIDTH=256&HEIGHT=256&STYLES=default&FORMAT=image/png&TRANSPARENT=TRUE"
        }
    ]
}, {
    "id": 2,
    "description": "Incendios",
    "layers": [{
        "description": "Zonas de Riesgo",
        "name": "Frecuencia de Incendios Forestales",
        "url": "http://wms.magrama.es/sig/Biodiversidad/Incendios/wms.aspx?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=Frecuencia%20de%20Incendios%20Forestales&WIDTH=256&HEIGHT=256&STYLES=default&FORMAT=image/png&TRANSPARENT=TRUE"
    }]
}, {
    "id": 3,
    "description": "Terremotos",
    "layers": [{
        "description": "Últimos 10 Días",
        "name": "Ultimos10dias",
        "url": "http://www.ign.es/wms-inspire/geofisica?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=Ultimos10dias&WIDTH=256&HEIGHT=256&STYLES=Terremotos10dias&FORMAT=image/png&TRANSPARENT=TRUE"
    }, {
        "description": "Últimos 30 Días",
        "name": "Ultimos30dias",
        "url": "http://www.ign.es/wms-inspire/geofisica?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=Ultimos30dias&WIDTH=256&HEIGHT=256&STYLES=Terremotos&FORMAT=image/png&TRANSPARENT=TRUE"
    }, {
        "description": "Últimos 365 Días",
        "name": "Ultimos365dias",
        "url": "http://www.ign.es/wms-inspire/geofisica?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=Ultimos365dias&WIDTH=256&HEIGHT=256&STYLES=Terremotos&FORMAT=image/png&TRANSPARENT=TRUE"
    }, {
        "description": "Zonas de Riesgo",
        "name": "NZ.HazardArea",
        "url": "http://www.ign.es/wms-inspire/geofisica?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.HazardArea&WIDTH=256&HEIGHT=256&STYLES=NormaSismorresistente&FORMAT=image/png&TRANSPARENT=TRUE"
    }, {
        "description": "Eventos Observados",
        "name": "NZ.ObservedEvent",
        "url": "http://www.ign.es/wms-inspire/geofisica?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX={bbox}&LAYERS=NZ.ObservedEvent&WIDTH=256&HEIGHT=256&STYLES=Terremotos&FORMAT=image/png&TRANSPARENT=TRUE"
    }]
}];