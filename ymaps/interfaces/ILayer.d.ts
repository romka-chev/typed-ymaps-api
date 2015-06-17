module ymaps {
    export module interfaces {
        export class ILayer extends IChildOnMap, ICustomizable, IEventEmitter {
            getBrightness():number;

            getCopyrights(coordinates:number[], zoom:number):vow.Promise;

            getZoomRange(point:number[]):vow.Promise;
        }
    }
}