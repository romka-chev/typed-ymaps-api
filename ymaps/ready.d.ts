module ymaps {
    export function ready(parameters:ReadyParameters):vow.Promise;

    // todo resolve namespace argument
    export function ready(successCallback:(namespace?:ymaps) => any, errorCallback?:Function, context?:any):vow.Promise;

    export class ReadyParameters {
        require:string[];
        successCallback:(namespace?:ymaps) => any; // todo resolve namespace argument
        errorCallback:Function;
        context:any;
    }
}