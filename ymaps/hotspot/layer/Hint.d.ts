namespace ymaps.hotspot.layer {

    interface HintStatic{
        // todo determine?
        new(hotspotLayer?:any):Hint;
    }
    interface Hint extends interfaces.IHintManager {
        // todo check data:IDataManager ?
        // todo check options:IOptionManager ?
        // todo check generics ?
        open(position?:number[], data?:any, options?:any):vow.Promise;
    }

    declare var Hint:HintStatic;
}