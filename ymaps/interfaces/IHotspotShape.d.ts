namespace ymaps.interfaces {

    interface IHotspotShape extends ICustomizable, IDomEventEmitter {
        getContainer():IHotspotContainer; // todo undefined interface?
        setContainer(container:IHotspotContainer):any; // todo undefined interface?
        getGeometry():any;
        setGeometry(geometry:any):any;
        getId():number;
        setId(id:number):any;
        getProperties():any;
        setProperties(properties:any):any;
        getShape():IShape;
        setShape(shape:IShape):any;
    }
}