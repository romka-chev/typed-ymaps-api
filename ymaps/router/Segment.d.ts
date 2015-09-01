module ymaps {
    export module router {
        export class Segment {

            getAction():"left"
                |"slight left"
                |"hard left"
                |"right"
                |"slight right"
                |"hard right"
                |"none"
                |"back"
                |"enter roundabout"
                |"leave roundabout"
                //|"leave roundabout 1"
                //|"leave roundabout 2"
                //|"leave roundabout [N]"
                |"merge"
                |"board ferry"
                |string; // because of "leave roundabout [N]"

            getAngle():number;
            getCoordinates():number[][];
            getHumanAction():string;
            getHumanJamsTime():string;
            getHumanLength():string;
            getHumanTime():string;
            getIndex():number;
            getJamsTime():number;
            getLength():number;
            getPolylineEndIndex():number;
            getPolylineStartIndex():number;
            getStreet():string;
            getTime():number;
        }
    }
}