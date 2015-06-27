module ymaps {
    export module hotspot {
        export module layer {
            export class Hint extends interfaces.IHintManager {

                // todo determine?
                constructor(hotspotLayer?:any);

                // todo check data:IDataManager ?
                // todo check options:IOptionManager ?
                // todo check generics ?
                open(position?:number[], data?:any, options?:any):vow.Promise;
            }
        }
    }
}