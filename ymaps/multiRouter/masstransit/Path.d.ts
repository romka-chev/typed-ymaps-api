namespace ymaps.multiRouter.masstransit {

    interface Path extends interfaces.IGeoObject {
        model:multiRouter.masstransit.PathModel;
        properties:PathPropertiesManager;

        getSegmentMarkers():GeoObjectCollection;
        getSegments():GeoObjectCollection;
    }

    interface PathPropertiesManager extends data.Manager {
        get(path:"index",              defaultValue?:number                 ):number;
        get(path:"type",               defaultValue?:string                 ):string; // todo determine?
        get(path:"distance",           defaultValue?:PathPropertiesDistance ):PathPropertiesDistance;
        get(path:"duration",           defaultValue?:PathPropertiesDuration ):PathPropertiesDuration;
        get(path:"coordinates",        defaultValue?:number[][]             ):number[][];
        get(path:"encodedCoordinates", defaultValue?:string                 ):string;
    }

    interface PathPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface PathPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}