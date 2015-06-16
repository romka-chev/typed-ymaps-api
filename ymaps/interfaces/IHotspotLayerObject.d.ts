module ymaps {
    export module interfaces {
        export interface IHotspotLayerObject extends ICustomizable, IDomEventEmitter{
            getHotspot():IHotspot;

            getGeometry():any;
            setGeometry(geometry:any):void;

            getId():number;
            setId(id:number):void;

            getProperties():any;
            setProperties(properties:any):void
        }
    }
}