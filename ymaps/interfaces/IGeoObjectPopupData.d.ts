module ymaps {
    export module interfaces {
        export interface IGeoObjectPopupData {
            geometry:IGeometry;
            geoObject:IGeoObject;
            properties:IDataManager;
            userData:any;
        }
    }
}