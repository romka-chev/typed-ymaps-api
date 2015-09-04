module ymaps {
    export module interfaces {
        export class IGeometry extends IBaseGeometry, ICustomizable {
            getBounds():number[][];
            getPixelGeometry(options?:any):IPixelGeometry;

            getMap():ymaps.Map;

            setMap(map:ymaps.Map):void;
        }
    }
}