module ymaps {
    export module interfaces {
        export class IGeometry extends IBaseGeometry, ICustomizable{
            getBounds():number[][]|undefined; //todo null?
            getPixelGeometry(options?:any):IPixelGeometry;

            getMap():ymaps.Map;
            setMap(map:ymaps.Map|undefined):void; // todo null?
        }
    }
}