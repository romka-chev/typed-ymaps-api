module ymaps {
    export class Hint extends interfaces.IHint, interfaces.Popup {
        constructor(map:Map, options?:HintOptions);
    }

    export class HintOptions {
        contentLayout:string|Function; // todo ILayout constructor?
        fitPane:boolean        = true;
        holdByMouse:boolean    = true;
        layout:string|Function = "islands#hint";  // todo ILayout constructor?
        offset:number[]; // todo check for single-number version
        pane:string = "outerHint"; // todo determine all keys?
    }
}