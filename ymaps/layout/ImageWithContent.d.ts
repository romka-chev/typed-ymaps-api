module ymaps {
    export module layout {
        class ImageWithContent extends Image {
            constructor(data:ImageWithContentData){
                super(<any>data);
            }
        }
        export class ImageWithContentData extends interfaces.ILayout{
            options:ImageWithContentDataOptions;
        }
        export class ImageWithContentDataOptions extends interfaces.ILayout{
            contentLayout:string|Function; // todo ILayout constructor?
            contentOffset:number[];
            contentSize:number[];
        }
    }
}