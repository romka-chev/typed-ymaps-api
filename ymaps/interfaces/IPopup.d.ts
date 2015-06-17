module ymaps {
    export module interfaces {
        export class IPopup extends ICustomizable, IEventEmitter {
            close(force?:boolean):vow.Promise;
            getData():void; // todo typo?
            getOverlay():vow.Promise;
            getOverlaySync():IOverlay;
            getPosition():void; // todo typo?
            isOpen():boolean;
            open(position?:number[], data?:string|HTMLElement|any):vow.Promise;
            setData(data:string|HTMLElement|any):vow.Promise;
            setPosition(position:number[]):vow.Promise;
        }
    }
}