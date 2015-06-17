module ymaps {
    export module interfaces {
        declare class IGeoObjectPopupData {
            geometry:IGeometry;
            geoObject:IGeoObject;
            properties:IDataManager;
            userData:any;
        }
    }
}