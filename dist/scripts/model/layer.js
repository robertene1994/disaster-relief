class Layer {
    showLayer(coord, zoom) {
        const proj = map.getProjection(),
            zFactor = Math.pow(2, zoom),
            top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zFactor, coord.y * 256 / zFactor)),
            bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zFactor, (coord.y + 1) * 256 / zFactor)),
            bbox = top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();
        return urls[this.name].replace('{bbox}', bbox);
    }

    fromJson(obj) {
        this.description = obj.description;
        this.name = obj.name;
        this.url = obj.url;
        return this;
    }
}