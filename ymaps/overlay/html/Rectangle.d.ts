module ymaps {
    export module overlay {
        export module hotspot {
            export class Rectangle extends interfaces.IOverlay {
                constructor(geometry:interfaces.IPixelRectangleGeometry, data?:any, options?:RectangleOptions);

                getElement():HTMLElement;

                getLayout():vow.Promise; // todo generics?
                getLayoutSync():interfaces.ILayout;

            }
            export class RectangleOptions {
                cursor:string;
                fillColor:string;
                fillImageHref:string;
                fillMethod:"stretch"|"tile" = "stretch";
                fillOpacity:number;
                interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#geoObject";
                opacity:number;
                pane:string = "areas"; // todo determine
                strokeColor:string;
                strokeStyle:number[]|string;
                strokeWidth:number;
                zIndex:number;
                borderRadius:number; // todo wtf is dataSet? maybe typo? report about wrong docs
            }
        }
    }
}