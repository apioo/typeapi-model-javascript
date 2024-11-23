import {PropertyType} from "typeschema-model";

export interface Response {
    code?: number
    contentType?: string
    schema?: PropertyType
}

