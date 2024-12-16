import {PropertyType} from "typeschema-model";

/**
 * Describes arguments of the operation
 */
export interface Argument {
    contentType?: string
    in?: string
    name?: string
    schema?: PropertyType
}

