module ymaps {
    export module map {
        export module behavior {
            export class Manager extends interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IParentOnMap {
                constructor(map:Map, behaviors:string|string[], options?:any); // todo determine parameters

                disable(behaviors:string|string[]):Manager;
                enable(behaviors:string|string[]):Manager;
                get(behaviorName:string):interfaces.IBehavior;
                isEnabled(behaviorName:string):boolean;
            }
        }
    }
}