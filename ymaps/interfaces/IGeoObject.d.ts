module ymaps {
    export module interfaces {
        declare class IGeoObject extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap{
            geometry:IGeometry|undefined; // todo null?
            properties:IDataManager;
            state:IDataManager;

            getOverlay():vow.Promise;
            getOverlaySync():IOverlay|undefined; // todo null?
        }
    }
}