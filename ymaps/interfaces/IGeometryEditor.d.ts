module ymaps {
    export module interfaces {
        declare class IGeometryEditor extends ICustomizable, IEventEmitter{
            geometry:IGeometry;
            state:IDataManager;

            startEditing():void;
            stopEditing():void;
        }
    }
}