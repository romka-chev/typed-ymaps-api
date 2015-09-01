module ymaps {
    export module overlay {
        export class Polygon extends interfaces.IOverlay {
            constructor(geometry:interfaces.IPixelPolygonGeometry, data?:any, options?:PolygonOptions);
        }

        export class PolygonOptions {
            fill:boolean;
            fillColor:string;
            fillImageHref:string;
            fillMethod:"stretch"|"tile" = 'stretch';
            fillOpacity:number;
            interactive:boolean         = true;
            opacity:number;
            outline:boolean;
            separateContainer:boolean;
            strokeColor:string;
            strokeOpacity:number;
            strokeStyle:number[]|string;
            strokeWidth:number;
        }
    }
}