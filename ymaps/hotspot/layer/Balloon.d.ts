namespace ymaps.hotspot.layer {

    interface BalloonStatic{
        // todo determine?
        new(hotspotLayer?:any):Balloon;
    }
    interface Balloon extends interfaces.IBalloonManager {
        // todo check data:IDataManager ?
        // todo check options:IOptionManager ?
        // todo check generics ?
        open(position?:number[], data?:any, options?:any):vow.Promise;
    }

    declare var Balloon:BalloonStatic;
}