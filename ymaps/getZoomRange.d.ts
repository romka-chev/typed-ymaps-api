module ymaps {
    export function getZoomRange(mapType:string|MapType, coordinates:number[], customizable:interfaces.ICustomizable = null):vow.Promise;
    // todo determine all mapTypes?
    // todo report about customizable is not required
    // todo generics for Promise?
}