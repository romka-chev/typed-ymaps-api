namespace ymaps.interfaces {
    interface IGeometry extends IBaseGeometry, ICustomizable {
        getBounds():number[][];
        getPixelGeometry(options?:any):IPixelGeometry;
        getMap():ymaps.Map;
        setMap(map:ymaps.Map):any;
    }
}