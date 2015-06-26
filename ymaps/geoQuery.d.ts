module ymaps {
    export function geoQuery(source:string
        |interfaces.IGeoObject
        |interfaces.IGeoObject[]
        |interfaces.ICollection // todo generics like ICollection<IGeoObject>?
        |interfaces.ICollection[] // todo generics like ICollection<IGeoObject>?
        |vow.Promise // todo check for generics?
        |GeoQueryResult
        |GeoQueryJsonDescription):GeoQueryResult;

}