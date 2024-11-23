import {PropertyType} from "typeschema-model";

export interface Argument {
    contentType?: string
    in?: string
    name?: string
    schema?: PropertyType
}

