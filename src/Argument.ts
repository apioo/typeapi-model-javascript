import {PropertyType} from "./typeschema/PropertyType";

export interface Argument {
    contentType?: string
    in?: string
    name?: string
    schema?: PropertyType
}

