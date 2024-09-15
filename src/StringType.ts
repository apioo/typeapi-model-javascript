import {ScalarType} from "./ScalarType";

/**
 * Represents a string type
 */
export interface StringType extends ScalarType {
    type?: string
    maxLength?: number
    minLength?: number
    pattern?: string
}
