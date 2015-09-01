module ymaps {
    export module projection {
        export class Cartesian extends interfaces.IProjection {

            // todo check for number[] type for bounds
            constructor(bounds:Object[], cycled:boolean[] = [false, false], scale:number|number[] = 1);
        }
    }
}