namespace ymaps.interfaces {

    interface IContainerPane extends IPane, IPositioningContext {
        getViewport():number[][];
    }
}