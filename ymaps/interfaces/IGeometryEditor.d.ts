namespace ymaps.interfaces {
    interface IGeometryEditor extends ICustomizable, IEventEmitter {
        geometry:IGeometry;
        state:IDataManager;

        startEditing():any;
        stopEditing():any;
    }
}