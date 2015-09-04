module ymaps {
    export module interfaces {
        export class IGeoObject extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap {
            geometry:IGeometry;
            properties:IDataManager;
            state:IDataManager;

            getOverlay():vow.Promise;

            getOverlaySync():IOverlay;
        }
    }
}