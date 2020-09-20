class VisualizationSystem {
    constructor() {
        this.wms = [];
    }

    getWMSById(id) {
        for (let i = 0; i < this.wms.length; i++)
            if (this.wms[i].id === id)
                return this.wms[i];
    }
}