module ymaps {
    export module overlay {
        export class Rectangle extends interfaces.IOverlay {
            constructor(geometry:interfaces.IPixelRectangleGeometry, data?:any, options?:RectangleOptions);
        }

        export class RectangleOptions {
            borderRadius:number;
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