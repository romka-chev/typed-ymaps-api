namespace ymaps.interfaces {

    interface ICopyrightsProvider extends IEventEmitter {
        remove():any;
        getCopyrights(coordinates:number[], zoom:number):vow.Promise;
        setCopyrights(copyrights:string|HTMLElement|string[]|HTMLElement[]):any;
    }
}