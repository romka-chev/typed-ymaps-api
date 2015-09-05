namespace ymaps.interfaces {

    interface IPopup extends ICustomizable, IEventEmitter {
        close(force?:boolean):vow.Promise;
        getData():any; // todo typo?
        getOverlay():vow.Promise;
        getOverlaySync():IOverlay;
        getPosition():any; // todo typo?
        isOpen():boolean;
        open(position?:number[], data?:string|HTMLElement|any):vow.Promise;
        setData(data:string|HTMLElement|any):vow.Promise;
        setPosition(position:number[]):vow.Promise;
    }
}