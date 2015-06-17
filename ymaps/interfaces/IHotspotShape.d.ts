module ymaps {
    export module interfaces {
        export class IHotspotShape extends ICustomizable, IDomEventEmitter {
            getContainer():IHotspotContainer; // todo undefined interface?
            setContainer(container:IHotspotContainer):void; // todo undefined interface?

            getGeometry():any;

            setGeometry(geometry:any):void;

            getId():number;

            setId(id:number):void;

            getProperties():any;

            setProperties(properties:any):void;

            getShape():IShape;

            setShape(shape:IShape):void;
        }
    }
}