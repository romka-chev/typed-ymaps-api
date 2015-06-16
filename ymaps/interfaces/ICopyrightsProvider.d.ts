module ymaps {
    export module interfaces {
        export interface ICopyrightsProvider extends IEventEmitter {
            remove():void;

            getCopyrights(coordinates:number[], zoom:number):vow.Promise;
            setCopyrights(copyrights:string|HTMLElement|string[]|HTMLElement[]):void;
        }
    }
}