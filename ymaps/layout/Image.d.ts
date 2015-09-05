module ymaps {
    export module layout {
        class Image extends interfaces.ILayout {
            constructor(data:ImageData){
                super(<any>data);
            }
        }
        export class ImageData extends interfaces.ILayout{
            options:ImageDataOptions;
        }
        export class ImageDataOptions extends interfaces.ILayout{
            imageClipRect:number[][];
            imageHref:string;
            imageOffset:number[];
            imageSize:number[];
            shape:interfaces.IShape|Object;
        }
    }
}