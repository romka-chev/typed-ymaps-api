module ymaps {
    export module util {
        export var hd:HD;

        export class HD{
            getPixelRatio():number;
            selectRatio(hash:interfaces.IRatioMap):number;
            selectValue(hash:Object|interfaces.IRatioMap):Object; // todo determine; dictionary
        }

        export class BoundsGetCenterAndZoomParams {
            inscribe:boolean = true;
            margin:number|number[] = 0;
            preciseZoom:boolean = false;
        }
        export class CenterAndZoom {
            center:number[];
            zoom:number;
        }

    }
}