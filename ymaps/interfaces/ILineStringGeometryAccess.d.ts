module ymaps {
    export module interfaces {
        declare class ILineStringGeometryAccess extends IFreezable {
            getChildGeometry(index:number):IPointGeometryAccess;
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
            };//todo declare class
            getCoordinates():number[][];
            setCoordinates(coordinates:number[][]):ILineStringGeometryAccess;
            getLength():number;
            insert(index:number, coordinates:number[]):ILineStringGeometryAccess;
            remove(index:number):number[];
            get(index:number):number[];
            set(index:number, coordinates:number[]):ILineStringGeometryAccess;
            splice(index:number, number:number):number[][];
        }
    }
}