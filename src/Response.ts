import {PropertyType} from "./typeschema/PropertyType";

export interface Response {
    code?: number
    contentType?: string
    schema?: PropertyType
}

