module ymaps {
    export module map {
        export class ZoomRange extends interfaces.IEventEmitter {
            constructor(map:Map, constraints:number[]);

            get():vow.Promise; // todo generics? number[]
            getCurrent():number[];
        }
    }
}