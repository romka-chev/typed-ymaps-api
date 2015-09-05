namespace ymaps.behaviour {

    interface RulerStatic{
        new():Ruler;
    }
    interface Ruler extends ymaps.interfaces.IBehavior {
        geometry:geometry.LineString;

        close():boolean;

        getState():string;

        setState(state:string):any;
    }

    declare var Ruler:RulerStatic;
}