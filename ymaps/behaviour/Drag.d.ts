namespace ymaps.behaviour {

    interface DragStatic {
        new(options:DragOptions = defaultDragOptionsOptions):Drag;
    }
    interface Drag extends ymaps.interfaces.IBehavior {
    }
    interface DragOptions {
        actionCursor?:string;
        cursor?:string;
        inertia?:boolean;
        inertiaDuration?:number;
        tremor?:number;
    }


    declare var Drag:DragStatic;
    declare var defaultDragOptionsOptions:DragOptions = {
        actionCursor   : 'grabbing',
        cursor         : 'grab',
        inertia        : true,
        inertiaDuration: 400,
        tremor         : 2
    };
}