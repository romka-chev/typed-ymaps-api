module ymaps {
    export module overlay {
        export class Pin extends interfaces.IOverlay {
            constructor(geometry:interfaces.IPixelPointGeometry, data?:any, options?:PinOptions);
        }

        export class PinOptions {
            fill:boolean;
            fillColor:string;
            fillImageHref:string;
            fillMethod:"stretch"|"tile" = 'stretch';
            fillOpacity:number;
            interactive:boolean         = true;
            opacity:number;
            outline:boolean;
            radius:number;
            separateContainer:boolean;
            strokeColor:string;
            strokeOpacity:number;
            strokeStyle:number[]|string;
            strokeWidth:number;
        }
    }
}