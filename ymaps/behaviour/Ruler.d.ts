module ymaps {
    export module behaviour {
        export class Ruler extends interfaces.IBehavior {
            geometry:geometry.LineString;
            close():boolean;
            getState():string;
            setState(state:string):void;
        }
    }
}