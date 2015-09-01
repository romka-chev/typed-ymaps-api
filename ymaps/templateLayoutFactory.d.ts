module ymaps {

    export var templateLayoutFactory:TemplateLayoutFactory;

    export class TemplateLayoutFactory {

        // todo determine return type
        // todo wtf in staticMethods description? report about type missed and docs wrong
        createClass(template:string, overrides?:Object, staticMethods?:any):Function;
    }

}