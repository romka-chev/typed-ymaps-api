namespace ymaps.layer.tileContainer {

    interface DomContainerStatic {
        new(layer:interfaces.ILayer, options:DomContainerOptions = defaultDomContainerOptions):DomContainer
    }
    interface DomContainer extends interfaces.IChildOnMap {
        getMap():Map;
        getTile(tileNumber:number[], tileZoom:number, priority:number):interfaces.IDomTile;
    }

    interface DomContainerOptions {
        notFoundTile   ?:string;
        tileClass      ?:string|interfaces.IDomTile; // todo report about string type missed
        tileTransparent?:boolean;
    }

    declare var DomContainer:DomContainerStatic;
    declare var defaultDomContainerOptions:DomContainerOptions = {
        tileClass      : "default#dom",
        tileTransparent: false,
    }
}