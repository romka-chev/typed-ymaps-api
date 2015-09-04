module ymaps {
    export module interfaces {
        export class IOptionManager extends IChild, IEventEmitter, IFreezable {
            get(key:string, defaultValue?:any):any; // todo generics?
            getAll():any;

            getName():string;

            getNative(key:string):any;

            getParent():IOptionManager;
            resolve(key:string, name?:string):any;

            setName(name:string):void;

            setParent(parent:IOptionManager):IOptionManager; //todo report about type in docs?
        }
    }
}