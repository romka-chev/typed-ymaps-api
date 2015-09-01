module ymaps {
    export module overlay {
        export class Circle extends interfaces.IOverlay {
            constructor(geometry:interfaces.IPixelCircleGeometry, data?:any, options?:CircleOptions);
        }

        export class CircleOptions {
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