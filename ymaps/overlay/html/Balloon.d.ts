module ymaps {
    export module overlay {
        export module hotspot {
            export class Balloon extends interfaces.IOverlay {
                constructor(geometry:interfaces.IPixelPointGeometry, data?:any, options?:BalloonOptions);

                getBalloonElement():HTMLElement;

                getBalloonLayout():vow.Promise; // todo generics?
                getBalloonLayoutSync():interfaces.ILayout;

                getElement():HTMLElement;

                getLayout():vow.Promise; // todo generics?
                getLayoutSync():interfaces.ILayout; // todo null?
                getMode():"panel"|"standard";

                getShadowElement():HTMLElement;

                getShadowLayout():vow.Promise; // todo generics?
                getShadowLayoutSync():interfaces.ILayout;

                isEmpty():boolean;
            }
            export class BalloonOptions {
                cursor:string;
                interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#opaque";
                layout:string|Function; // todo determine
                offset:number[] = [0, 0]; // todo report about ambiguous type declaration
                pane:string = "balloon"; // todo determine
                shadow:boolean = true;
                shadowLayout:string|Function; // todo determine
                shadowOffset:number[] = [0, 0]; // todo report about ambiguous type declaration
                shadowsPane:any = "shadowsPane"; // todo wtf? report about ambiguous type declaration
                zIndex:number;
            }
        }
    }
}