module ymaps {
    export class LayerCollection extends interfaces.ILayer, interfaces.IMapObjectCollection {
        add(child:string|interfaces.ILayer):LayerCollection;

        // todo check is it really void
        // todo check for (item?:string|ILayer) => any?
        each(callback:Function, context?:any):void;
        getBrightness():number;

        // todo generics?
        getCopyrights(coordinates?:number[], zoom:number):vow.Promise;

        // todo generics?
        getZoomRange():vow.Promise;
        remove(child:string|interfaces.ILayer):LayerCollection;
    }
}