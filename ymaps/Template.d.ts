module ymaps {
    export class Template {
        constructor(text:string);

        build(data:interfaces.IDataManager):TemplateBuildResult;
    }

    export class TemplateBuildResult {
        text:string;
        renderedValues:Object[];
    }
}