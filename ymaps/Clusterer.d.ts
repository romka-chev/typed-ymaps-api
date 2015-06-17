module ymaps {
    export class Clusterer extends interfaces.IChildOnMap, interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IParentOnMap {
        constructor(options?:ClustererOptions);
    }

    export class ClustererOptions {
        gridSize:number                  = 64;
        groupByCoordinates:boolean       = false;
        hasBalloon:boolean               = true;
        hasHint:boolean                  = true;
        margin:number | number[]         = 10;
        maxZoom:number[]|number          = Infinity; // todo check type declaration
        minClusterSize:number            = 2;
        preset:string;
        showInAlphabeticalOrder:boolean  = false;
        viewportMargin:number | number[] = 128;
        zoomMargin:number | number[]     = 0;

    }
}