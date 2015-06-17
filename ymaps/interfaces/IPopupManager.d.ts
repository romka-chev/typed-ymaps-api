module ymaps {
    export module interfaces {
        declare class IPopupManager extends IEventEmitter {
            close(force?:boolean):vow.Promise;
            destroy():void;
            getData():void; // todo typo?
            getOptions():IOptionManager;
            getOverlay():vow.Promise;
            getOverlaySync():IOverlay;
            getPosition():void; // todo typo?
            isOpen():boolean;
            open(position?:number[], data?:string|HTMLElement|any, options?:any):vow.Promise;
            setData(data:string|HTMLElement|any):vow.Promise;
            setOptions(options:any):vow.Promise;
            setPosition(position:number[]):vow.Promise;
        }
    }
}