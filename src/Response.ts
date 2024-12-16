import {PropertyType} from "typeschema-model";

/**
 * Describes the response of the operation
 */
export interface Response {
    code?: number
    contentType?: string
    schema?: PropertyType
}

