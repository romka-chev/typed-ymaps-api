module ymaps {
    export class modules {
        static define(module:string, depends:string[], resolveCallback:ModulesResolveCallback, context?:any):modules;
        static define(module:string,                   resolveCallback:ModulesResolveCallback, context?:any):modules;

        static isDefined(module:string):boolean;

        static require(modules:string|string[], successCallback?:(...modules:any[]) => any, errorCallback?:Function, context?:any):vow.Promise;
    }

    export interface ModulesResolveCallback{
        (provide:(module:any) => any, ...args:any[]):any;
    }
}