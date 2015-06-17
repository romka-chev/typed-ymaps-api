module ymaps {
    export module interfaces {
        export class IGeoObjectPopupData {
            geometry:IGeometry;
            geoObject:IGeoObject;
            properties:IDataManager;
            userData:any;
        }
    }
}