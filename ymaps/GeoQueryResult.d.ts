module ymaps {
    export class GeoQueryResult extends interfaces.IPromiseProvider{
        constructor(source:string
            |interfaces.IGeoObject
            |interfaces.IGeoObject[]
            |interfaces.ICollection // todo generics like ICollection<IGeoObject>?
            |interfaces.ICollection[] // todo generics like ICollection<IGeoObject>?
            |interfaces.IPromiseProvider // todo check for vow.Promise? check for generics?
            |GeoQueryResult
            |GeoQueryJsonDescription);

        add(source:string
            |interfaces.IGeoObject
            |interfaces.IGeoObject[]
            |interfaces.ICollection // todo generics like ICollection<IGeoObject>?
            |interfaces.ICollection[] // todo generics like ICollection<IGeoObject>?
            |vow.Promise // wtf? todo check for vow.Promise? check for generics?
            |GeoQueryResult
            |GeoQueryJsonDescription):GeoQueryResult;

        addEvents(events:string|string[], callback:Function, context:any):GeoQueryResult; // todo context is not required? report?
        addTo(collection:interfaces.ICollection):GeoQueryResult; // todo generics like ICollection<IGeoObject>?
        addToMap(map:Map):GeoQueryResult;
        applyBoundsToMap(map:Map, options?:GeoQueryResultApplyBoundsToMapOptions):GeoQueryResult;
        clusterize(options?:ClustererOptions):Clusterer; // todo check options carefully
        each(callback:Function, context:any):GeoQueryResult; // todo (item?:IGeoObject) => any? todo context is not required? report?
        get(index:number):interfaces.IGeoObject;
        getBounds():number[][]|undefined; // todo null?
        getCenter(map:Map):number[][];
        getCentralObject(map:Map):interfaces.IGeoObject|undefined; // todo null?
        getClosestTo(object:interfaces.IGeoObject|interfaces.IGeometry|Map|number[]|GeoQueryJsonDescriptionFeature, radius?:number):interfaces.IGeoObject; // todo check GeoQueryJsonDescriptionFeature carefully
        getExtreme(key:"top"|"right"|"bottom"|"left"):number;
        getExtremeObject(key:"top"|"right"|"bottom"|"left"):interfaces.IGeoObject;
        getGlobalPixelBounds(map:Map):number[][]|undefined; // todo null?
        getGlobalPixelCenter(map:Map):number[];
        getIterator():interfaces.IIterator;
        getLength():number;
        getMaxZoom(map:Map, options?:any):number; // todo map in not required? report?
        getParent():GeoQueryResult|undefined; // todo null?
        indexOf(item:interfaces.IGeoObject):number;
        intersect(result:GeoQueryResult):GeoQueryResult;
        isReady():boolean;
        map(callback:(item?:interfaces.IGeoObject) => interfaces.IGeoObject, context?:any):GeoQueryResult; // todo check callback carefully
        remove(objects:interfaces.IGeoObject
            |interfaces.IGeoObject[]
            |interfaces.ICollection // todo generics like ICollection<IGeoObject>?
            |interfaces.ICollection[] // todo generics like ICollection<IGeoObject>?
            |vow.Promise // todo check for generics?
            |GeoQueryResult):GeoQueryResult;
        removeEvents(events:string|string[], callback:Function, context:any):void; // wtf? todo check is it really void? context is not required?
        removeFrom(collection:interfaces.ICollection):GeoQueryResult; // todo check for ICollection<IGeoObject>?
        removeFromMap(map:Map):GeoQueryResult;
        reverse():GeoQueryResult;
        search(condition:string|Function):GeoQueryResult; // todo (item?:IGeoObject) => boolean? or (item?:IGeoObject) => any?
        searchContaining(object:interfaces.IGeoObject
            |interfaces.IGeometry
            |Map
            |number[]
            |number[][]
            |any // todo is it GeoQueryJsonDescription?
        ):GeoQueryResult;
        searchInside(object:interfaces.IGeoObject|interfaces.IGeometry|Map):GeoQueryResult;
        searchIntersect(object:interfaces.IGeoObject|interfaces.IGeometry|Map, options?:GeoQueryResultSearchIntersectOptions):GeoQueryResult;
        setOptions(key:string|{[key:string]:any}, value?:any):GeoQueryResult; // todo extract dictionary? why value is not required?
        setProperties(path:string, value:any):GeoQueryResult;
        slice(begin:number, end?:number):GeoQueryResult;
        sort(comparator:string|Function):void; // todo check is it really void; (a?:IGeoObject, b?:IGeoObject) => number? (a?:IGeoObject, b?:IGeoObject) => any?
        sortByDistance(object:interfaces.IGeoObject
            |interfaces.IGeometry
            |Map
            |number[]
            |number[][]
            |any // todo check is it GeoQueryJsonDescription?
            , radius:number):GeoQueryResult; // todo report about "raduis" typo, report radius type missed

        // todo WTF? report error in declaration code
        then(onFulfill:Function, onReject:Function, context?:any):GeoQueryResult;
        unsetOptions(keys:string|string[]):GeoQueryResult; // todo report about error ing type declaration
        unsetProperties(path:string):GeoQueryResult; // todo check for multiple-value version?

    }

    export class GeoQueryJsonDescription {
        type:"FeatureCollection";
        features:GeoQueryJsonDescriptionFeature[]
    }
    export class GeoQueryJsonDescriptionFeature {
        type:"Feature";
        geometry:any; // todo determine all constructors for GeoObjects?
        options:any;
        properties:any;
    }
    export class GeoQueryResultApplyBoundsToMapOptions{
        checkZoomRange:boolean = false;
        duration:number = 0;
        preciseZoom:boolean = false;
        timingFunction:string = "linear";
        zoomMargin:number|number[] = 0;
    }
    export class GeoQueryResultSearchIntersectOptions{
        considerOccurance:boolean = true;
    }
}