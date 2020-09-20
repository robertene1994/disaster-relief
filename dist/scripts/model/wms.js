class WMS {
    constructor() {
        this.layers = [];
    }

    getLayerByName(name) {
        for (let i = 0; i < this.layers.length; i++)
            if (this.layers[i].name === name)
                return this.layers[i];
    }

    fromJson(obj) {
        this.id = obj.id;
        this.description = obj.description;
        this.url = obj.url;
        for (let i = 0; i < obj.layers.length; i++)
            this.layers.push(new Layer().fromJson(obj.layers[i]));
        return this;
    }
}