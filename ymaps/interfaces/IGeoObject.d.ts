namespace ymaps.interfaces {
    interface IGeoObject extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap {
        geometry:IGeometry;
        properties:IDataManager;
        state:IDataManager;

        getOverlay():vow.Promise;
        getOverlaySync():IOverlay;
    }
}