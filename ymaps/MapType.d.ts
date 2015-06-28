module ymaps {
    export class MapType  {
        constructor(name:string, layers:string[]|Function[]); // todo determine

        getLayers():string[]|Function[];

        // todo report about ambiguous declaration
        // todo check for map parameter
        getName():string;
    }
}