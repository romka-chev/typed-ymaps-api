namespace ymaps.interfaces {
    interface IPopupManager extends IEventEmitter {
        close(force?:boolean):vow.Promise;
        destroy():any;
        getData():any; // todo typo?
        getOptions():IOptionManager;
        getOverlay():vow.Promise;
        getOverlaySync():IOverlay;
        getPosition():any; // todo typo?
        isOpen():boolean;
        open(position?:number[], data?:string|HTMLElement|any, options?:any):vow.Promise;
        setData(data:string|HTMLElement|any):vow.Promise;
        setOptions(options:any):vow.Promise;
        setPosition(position:number[]):vow.Promise;
    }
}