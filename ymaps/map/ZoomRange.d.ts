namespace ymaps.map {

    interface ZoomRangeStatic {
        new(map:Map, constraints:number[]):ZoomRange;
    }
    interface ZoomRange extends interfaces.IEventEmitter {
        get():vow.Promise; // todo generics? number[]
        getCurrent():number[];
    }

    declare var ZoomRange:ZoomRangeStatic;
}