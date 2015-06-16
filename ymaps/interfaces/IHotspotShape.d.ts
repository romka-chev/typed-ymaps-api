module ymaps {
    export module interfaces {
        export interface IHotspotShape extends ICustomizable, IDomEventEmitter{
            getContainer():IHotspotContainer;
            setContainer(container:IHotspotContainer):void;

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