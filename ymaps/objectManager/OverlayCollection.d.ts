module ymaps {
    export module objectManager {
        class OverlayCollection extends interfaces.ICustomizable, interfaces.IEventEmitter {

            // todo check for fluid interface
            // todo report about context argument not required
            // todo determine callback declaration
            each(callback:Function, context?:any):any;

            // todo determine;?
            getAll():any[];

            // todo determine. Why number?
            getById(id:number):any;

            getId(overlay:interfaces.IOverlay):number;

            getIterator():interfaces.IIterator;

            getLength():number;
        }
    }
}