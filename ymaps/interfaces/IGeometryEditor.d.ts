module ymaps {
    export module interfaces {
        export class IGeometryEditor extends ICustomizable, IEventEmitter {
            geometry:IGeometry;
            state:IDataManager;

            startEditing():void;

            stopEditing():void;
        }
    }
}