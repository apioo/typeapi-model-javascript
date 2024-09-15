import {CommonType} from "./CommonType";

/**
 * Represents a scalar type
 */
export interface ScalarType extends CommonType {
    format?: string
    enum?: Array<string | number>
}
