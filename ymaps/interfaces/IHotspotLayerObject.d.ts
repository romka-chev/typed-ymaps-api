namespace ymaps.interfaces {
    interface IHotspotLayerObject extends ICustomizable, IDomEventEmitter {
        getHotspot():IHotspot;
        getGeometry():any;
        setGeometry(geometry:any):any;
        getId():number;
        setId(id:number):any;
        getProperties():any;
        setProperties(properties:any):any;
    }
}