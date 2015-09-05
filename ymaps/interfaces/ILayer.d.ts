namespace ymaps.interfaces {

    interface ILayer extends IChildOnMap, ICustomizable, IEventEmitter {
        getBrightness():number;
        getCopyrights(coordinates:number[], zoom:number):vow.Promise;
        getZoomRange(point:number[]):vow.Promise;
    }
}