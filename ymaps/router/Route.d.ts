module ymaps {
    export module router {
        // todo check for realization interface instead of inheritance
        export class Route extends interfaces.IGeoObject {

            editor:router.Editor;

            getHumanJamsTime():string;
            getHumanLength():string;
            getHumanTime():string;
            getJamsTime():number;
            getLength():number;
            getPaths():GeoObjectCollection; // todo generics
            getTime():number;
            getViaPoints():GeoObjectCollection; // todo generics
            getWayPoints():GeoObjectCollection; // todo generics

        }
    }
}